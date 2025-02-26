document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('DlThe4wmBORnHsHvx');

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-main'
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }

            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            emailjs.send('service_h4jt00c', 'template_gdsy5nr', {
                name: name,
                email: email,
                message: message
            }).then(function (response) {
                const alertPlaceholder = document.getElementById('form-alert');
                const wrapper = document.createElement('div');
                wrapper.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        Form submitted successfully!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                alertPlaceholder.innerHTML = '';
                alertPlaceholder.append(wrapper);

                contactForm.classList.remove('was-validated');
                contactForm.reset();

                setTimeout(() => {
                    const alert = document.querySelector('.alert');
                    if (alert) {
                        const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
                        bsAlert.close();
                    }
                }, 5000);

            }, function (error) {
                const alertPlaceholder = document.getElementById('form-alert');
                const wrapper = document.createElement('div');
                wrapper.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Failed to send the form. Please try again later.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                alertPlaceholder.innerHTML = '';
                alertPlaceholder.append(wrapper);
            });
        });
    }
});
