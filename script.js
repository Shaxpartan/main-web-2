// Example code to toggle navigation bar on scroll for mobile
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.opacity = '0.8';
    } else {
        header.style.opacity = '1';
    }
});

// Example code to add functionality to your CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function(event) {
    // Add your action here, e.g., redirect to a link or display a message
    alert('You clicked the CTA button!');
    // Prevent the default behavior of the link
    event.preventDefault();
});

// You can add more JavaScript code as needed for your specific functionality
