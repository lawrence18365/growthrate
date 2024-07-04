document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const chatBubble = document.getElementById('chat-bubble');

    ctaButton.addEventListener('click', () => {
        alert('Pricing information coming soon!');
    });

    chatBubble.addEventListener('click', () => {
        alert('Chat functionality coming soon!');
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a simple animation to the hero text
    const heroText = document.querySelector('#hero h1');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';

    setTimeout(() => {
        heroText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);
});
