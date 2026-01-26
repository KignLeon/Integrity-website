document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const consultationForm = document.getElementById('consultationForm');
    const modal = document.getElementById('consult-modal');

    // 1. Scroll Handler
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled', 'shadow-xl');
            header.classList.remove('py-8');
            header.classList.add('py-4');
        } else {
            header.classList.remove('scrolled', 'shadow-xl');
            header.classList.remove('py-4');
            header.classList.add('py-8');
        }
    });

    // 2. Modal Controls
    window.toggleModal = (show) => {
        if (show) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        } else {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    };

    // 3. Form Handling
    if (consultationForm) {
        consultationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = consultationForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending Request...';

            const formData = new FormData(consultationForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/consultation', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Success UI
                    modal.innerHTML = `
                        <div class="text-center py-12">
                            <div class="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fa-solid fa-check-double text-3xl"></i>
                            </div>
                            <h3 class="text-3xl font-black text-slate-900 mb-3">Consultation Set</h3>
                            <p class="text-slate-500 max-w-xs mx-auto mb-8">Julio Munoz will reach out within 24 business hours to confirm your property visit.</p>
                            <button onclick="toggleModal(false)" class="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold">Close</button>
                        </div>
                    `;
                } else {
                    throw new Error('Server error');
                }
            } catch (err) {
                console.error('Submission error:', err);
                submitBtn.innerText = 'Error. Try Again.';
                submitBtn.disabled = false;
            }
        });
    }

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});