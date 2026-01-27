/**
 * Integrity Electrical - Core Interaction Script
 * Handles: Mobile Menu, Modals, Forms (AJAX + Validation)
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModalSystem();
    initForms();
});

/* --- Mobile Menu --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('#mobile-menu a');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        toggleMenu(!isOpen);
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    function toggleMenu(show) {
        if (show) {
            menu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Lock Body Scroll
            btn.innerHTML = '<i class="fas fa-times text-2xl text-electric"></i>';
        } else {
            menu.classList.remove('open');
            document.body.style.overflow = '';
            btn.innerHTML = '<i class="fas fa-bars text-2xl text-white"></i>';
        }
    }
}

/* --- Modal System --- */
function initModalSystem() {
    const modal = document.getElementById('modal-overlay');
    const triggers = document.querySelectorAll('[data-trigger="modal"]');
    const closers = document.querySelectorAll('[data-close="modal"]');

    if (!modal) return;

    // Button Triggers
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Close Triggers
    closers.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Outside Click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // Exit Intent (Desktop Only)
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
            if (!sessionStorage.getItem('modalShown')) {
                openModal();
                sessionStorage.setItem('modalShown', 'true');
            }
        }
    });

    function openModal() {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.querySelector('.modal-container').classList.remove('modal-enter');
            modal.querySelector('.modal-container').classList.add('modal-enter-active');
        });
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

/* --- Count Up Animation --- */
function initCountUp() {
    const counters = document.querySelectorAll('[data-target]');
    const speed = 200; // The lower the slower

    const animate = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, '').replace(/\+/g, ''); // Clean current text

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    // Add increment
                    counter.innerText = Math.ceil(count + inc);
                    // Call function every ms
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    }

    // Intersection Observer to start animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target); // Run once
            }
        });
    }, { threshold: 0.5 });

    if (counters.length > 0) {
        // Observe the section containing counters, or individual counters
        // Assuming they are grouped, but observing individual is safer
        counters.forEach(c => observer.observe(c));
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModalSystem();
    initCountUp();
});

/* --- Form Handling --- */
function initForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Phone Masking
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', formatPhoneNumber);
        }

        // Submission Logic
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSubmission(form);
        });
    });
}

function formatPhoneNumber(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
}

function handleSubmission(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Validate
    const phone = form.querySelector('input[type="tel"]');
    if (phone && phone.value.length < 14) {
        alert("Please enter a valid phone number."); // Fallback alert, could be cleaner inline
        phone.classList.add('border-red-500');
        return;
    }

    // Lock UI
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Timestamp
    data.submittedAt = new Date().toISOString();

    // Page Context
    data.pageUrl = window.location.href;

    fetch('{{WEBHOOK_URL}}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                btn.innerHTML = '<i class="fas fa-check mr-2"></i> Sent!';
                btn.classList.add('bg-green-500', 'text-white');

                const successMsg = document.createElement('div');
                successMsg.className = 'mt-4 p-4 bg-green-500/10 border border-green-500 rounded text-green-100 text-center font-bold animate-pulse';
                successMsg.innerHTML = "Thanks! We'll reach out shortly.";

                form.appendChild(successMsg);
                form.reset();

                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-500', 'text-white');
                    successMsg.remove();
                    if (form.closest('#modal-overlay')) {
                        document.getElementById('modal-overlay').classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                }, 3000);
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            btn.innerHTML = 'Error. Try Again.';
            btn.classList.add('bg-red-500', 'text-white');
            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = originalText;
                btn.classList.remove('bg-red-500', 'text-white');
            }, 3000);
        });
}
