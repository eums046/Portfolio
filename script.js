 document.addEventListener('DOMContentLoaded', function() {
            // Initialize EmailJS
            emailjs.init('DlThe4wmBORnHsHvx');
            
            // Activate Bootstrap scrollspy
            const scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: '#navbar-main'
            });
            
            // Smooth scrolling for nav links
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    // Update active class manually
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Scroll to the target
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for navbar height
                        behavior: 'smooth'
                    });
                    
                    // Close the mobile navbar if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        bsCollapse.hide();
                    }
                });
            });
            
            // Form validation and submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    if (!this.checkValidity()) {
                        e.stopPropagation();
                        this.classList.add('was-validated');
                        return;
                    }
                    
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const message = document.getElementById('message').value.trim();
                    
                    // Send email using EmailJS
                    emailjs.send('service_h4jt00c', 'template_gdsy5nr', {
                        name: name,
                        email: email,
                        message: message
                    }).then(function(response) {
                        // Show success alert
                        const alertPlaceholder = document.getElementById('form-alert');
                        const wrapper = document.createElement('div');
                        wrapper.innerHTML = 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                Form submitted successfully!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        ;
                        alertPlaceholder.innerHTML = '';
                        alertPlaceholder.append(wrapper);
                        
                        // Reset form
                        contactForm.classList.remove('was-validated');
                        contactForm.reset();
                        
                        // Auto-dismiss alert after 5 seconds
                        setTimeout(() => {
                            const alert = bootstrap.Alert.getOrCreateInstance(document.querySelector('.alert'));
                            if (alert) {
                                alert.close();
                            }
                        }, 5000);
                        
                    }, function(error) {
                        // Show error alert
                        const alertPlaceholder = document.getElementById('form-alert');
                        const wrapper = document.createElement('div');
                        wrapper.innerHTML = 
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                Failed to send the form. Please try again later.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        ;
                        alertPlaceholder.innerHTML = '';
                        alertPlaceholder.append(wrapper);
                    });
                });
            }
        });
