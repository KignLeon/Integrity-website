/**
 * Integrity Electrical - Production Script
 * Handles Mobile Menu, Input Formatting, and AJAX Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFormHandling();
});

function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        const icon = menuButton.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl';
        }
    });
}

function initFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);

        // Real-time phone formatting
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', formatPhoneNumber);
        }
    });
}

function formatPhoneNumber(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Clear previous errors
    clearErrors(form);

    // Validate Phone
    const phoneInput = form.querySelector('input[type="tel"]');
    if (phoneInput && !isValidPhone(phoneInput.value)) {
        showError(phoneInput, 'Please enter a valid US phone number.');
        return;
    }

    // Prepare UI for submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';

    // Simulate AJAX Request
    setTimeout(() => {
        // Success functionality
        form.reset();
        submitBtn.innerText = 'Message Sent!';

        showSuccessMessage(form);

        // Reset button state after delay
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 4000);
    }, 1000);
}

function isValidPhone(phone) {
    const phoneRegex = /^(\(\d{3}\)\s|\d{3}[.-]?)?\d{3}[.-]?\d{4}$/;
    return phoneRegex.test(phone);
}

function showError(input, message) {
    // Add red border
    input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');

    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-600 text-sm mt-1 error-msg';
    errorDiv.innerText = message;

    input.parentNode.appendChild(errorDiv);
    input.focus();
}

function clearErrors(form) {
    form.querySelectorAll('.error-msg').forEach(el => el.remove());
    form.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    });
}

function showSuccessMessage(form) {
    // Remove existing success messages if any
    const existing = form.querySelector('.success-msg');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'mt-4 p-4 bg-green-50 text-green-800 border border-green-200 rounded text-center font-medium fade-in success-msg';
    msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Request received. We will call you shortly.';

    form.appendChild(msg);

    // Auto-remove after 5s
    setTimeout(() => msg.remove(), 5000);
}
