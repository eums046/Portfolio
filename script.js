// Utility function to check for mobile devices
function isMobileDevice() {
    const userAgent = navigator.userAgent;
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

// Adjust layout for mobile devices
function adjustLayoutForMobile() {
    document.body.classList.toggle('mobile-view', isMobileDevice());
}

// Function to create stars
function createStars(numStars = 100) {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    document.body.appendChild(starContainer);

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1; // Size between 1px and 3px
        const positionX = Math.random() * 100; // Horizontal position (0-100vw)
        const positionY = Math.random() * 100; // Vertical position (0-100vh)

        Object.assign(star.style, {
            width: `${size}px`,
            height: `${size}px`,
            top: `${positionY}vh`,
            left: `${positionX}vw`,
            position: 'absolute',
        });

        star.className = 'star';
        fragment.appendChild(star);
    }

    starContainer.appendChild(fragment);
}

// Function to handle hover animations
function handleHoverAnimation() {
    const sections = [
        { id: 'greeting', entries: ['#paragraph'] },
        { id: 'education', entries: ['.education-entry'] },
        { id: 'certificates', entries: ['.certificate-entry'] }
    ];

    sections.forEach(({ id, entries }) => {
        const section = document.getElementById(id);
        const elements = entries.flatMap(entry => document.querySelectorAll(entry));

        if (section) {
            section.addEventListener('mouseenter', () => {
                elements.forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                });
            });

            section.addEventListener('mouseleave', () => {
                elements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(-100%)';
                });
            });
        }
    });
}

// Initialize scripts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    handleHoverAnimation();

    const greeting = document.getElementById('greeting');
    const downloadBtn = document.getElementById('downloadBtn');

    if (greeting && downloadBtn) {
        greeting.addEventListener('mouseenter', () => {
            setTimeout(() => {
                downloadBtn.style.display = 'block';
            }, 1500); // Adjust timing as needed
        });
    }
});

// Attach event listeners for responsive layout adjustments
window.addEventListener('load', adjustLayoutForMobile);
window.addEventListener('resize', adjustLayoutForMobile);
