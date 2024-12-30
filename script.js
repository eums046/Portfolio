document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactForm = document.getElementById('contact-form');

    emailjs.init('DlThe4wmBORnHsHvx');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            emailjs.send('service_h4jt00c', 'template_gdsy5nr', {
                name: name,
                email: email,
                message: message
            }).then(function(response) {
                alert('Form submitted successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send the form. Please try again later.');
            });
        });
    }
});