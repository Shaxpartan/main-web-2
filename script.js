// Function to update the top navigation bar's opacity based on scroll position
function updateNavOpacity() {
    const topNav = document.querySelector('.top-nav');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
}

// Call the function when the page loads and on scroll
window.addEventListener('load', updateNavOpacity);
window.addEventListener('scroll', updateNavOpacity);

// You can add more JavaScript code as needed for your specific functionality
