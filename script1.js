// Enable smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {       // On link click
        e.preventDefault();                  // Stop default jump
        const id = a.getAttribute('href');   // Get target ID
        const el = document.querySelector(id); // Find target
        if (el)                               // If exists
            window.scrollTo({                // Scroll smoothly
                top: el.offsetTop - 80,      // Offset for header
                behavior: 'smooth'           // Smooth effect
            });
    });
});

