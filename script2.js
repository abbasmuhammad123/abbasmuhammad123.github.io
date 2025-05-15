// Simple script to enable smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Select all anchor links that start with #
    anchor.addEventListener('click', function(e) {
        // Add click event listener to each anchor
        e.preventDefault(); // Prevent the default jump to the section
        
        const targetId = this.getAttribute('href'); // Get the target section ID from href
        const targetElement = document.querySelector(targetId); // Select the target element
        
        if (targetElement) {
            // If the target element exists, scroll to it smoothly with an offset
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Scroll position minus 80px offset
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});
