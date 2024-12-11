document.addEventListener('DOMContentLoaded', function () {
    // Function to create stars
    function createStars() {
        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container');
        document.body.appendChild(starContainer);

        // Create a number of stars
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;  // Random size between 1px and 3px
            const positionX = Math.random() * 100;  // Random horizontal position
            const positionY = Math.random() * 100;  // Random vertical position

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${positionY}vh`;
            star.style.left = `${positionX}vw`;

            starContainer.appendChild(star);
        }
    }

    // After the paragraph animation is complete, show the download button
    greeting.addEventListener('mouseenter', () => {
        setTimeout(() => {
            downloadBtn.style.display = 'block';  // Show the download button after a delay
        }, 1500);  // Delay in ms (match this with the animation time)
    });

    // Function to handle the hover animation for greeting, education, and certifications sections
    function handleHoverAnimation() {
        // Greeting hover animation
        const greeting = document.getElementById('greeting');
        const paragraph = document.getElementById('paragraph');

        greeting.addEventListener('mouseenter', () => {
            paragraph.style.opacity = '1';
            paragraph.style.transform = 'translateX(0)';
        });

        greeting.addEventListener('mouseleave', () => {
            paragraph.style.opacity = '0';
            paragraph.style.transform = 'translateX(-100%)';
        });

        // Education hover animation
        const education = document.getElementById('education');
        const educationEntries = document.querySelectorAll('.education-entry');

        education.addEventListener('mouseenter', () => {
            educationEntries.forEach(entry => {
                entry.style.opacity = '1';
                entry.style.transform = 'translateX(0)';
            });
        });

        education.addEventListener('mouseleave', () => {
            educationEntries.forEach(entry => {
                entry.style.opacity = '0';
                entry.style.transform = 'translateX(-100%)';
            });
        });

        // Certifications hover animation
        const certificates = document.getElementById('certificates');
        const certificateEntries = document.querySelectorAll('.certificate-entry');

        certificates.addEventListener('mouseenter', () => {
            certificateEntries.forEach(entry => {
                entry.style.opacity = '1';
                entry.style.transform = 'translateX(0)';
            });
        });

        certificates.addEventListener('mouseleave', () => {
            certificateEntries.forEach(entry => {
                entry.style.opacity = '0';
                entry.style.transform = 'translateX(-100%)';
            });
        });
    }

    // Call the function to create stars
    createStars();

    // Call the function to initialize hover animations
    handleHoverAnimation();
});
