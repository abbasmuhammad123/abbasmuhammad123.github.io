// Simple script to enable smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Select all anchor tags that link to an ID (start with #)
    anchor.addEventListener('click', function(e) { // Add a click event listener to each anchor
        e.preventDefault(); // Prevent the default jump-to behavior of the anchor link
        
        const targetId = this.getAttribute('href'); // Get the target element's ID from the href attribute
        const targetElement = document.querySelector(targetId); // Find the element in the DOM with the matching ID
        
        if (targetElement) { // Check if the target element exists
            window.scrollTo({ // Smoothly scroll the window to the target element
                top: targetElement.offsetTop - 80, // Scroll to the element's top position minus 80px (e.g., for fixed header)
                behavior: 'smooth' // Use smooth scrolling animation
            });
        }
    });
});
