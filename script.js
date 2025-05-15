// Toggle mobile menu
function toggleMenu() {
    // Toggle 'active' class on the navigation menu for mobile toggle
    document.getElementById('main-nav').classList.toggle('active');
}
// Testimonial slider
let currentSlide = 0; // Initialize current slide index to 0
const container = document.getElementById('testimonial-container'); // Get the testimonial slider container
const dots = document.querySelectorAll('.slider-dot'); // Get all the slider dots

// Change to specific slide
function changeSlide(i) {
    currentSlide = i; // Set current slide index to the specified one
    container.style.transform = `translateX(-${i * 100}%)`; // Move the container to show the selected slide
    dots.forEach((dot, idx) => 
        dot.classList.toggle('active', idx === i) // Highlight the active dot
    );
}
// Auto-advance slides every 5s
setInterval(() => 
    changeSlide((currentSlide + 1) % 3), // Move to next slide, looping after last
5000);

// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(link =>
    // Add click event listener to all anchor links pointing to IDs
    link.addEventListener('click', e => {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(link.getAttribute('href')); // Get the target element
        if (target) {
            // Smoothly scroll to the target position minus offset
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            // Close the navigation menu after clicking
            document.getElementById('main-nav').classList.remove('active');
        }
    })
);

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission
    const f = e.target.elements; // Get all form fields
    // Show thank you alert using the entered name
    alert(`Thank you ${f.name.value} for your message! We will get back to you soon.`);
    e.target.reset(); // Reset the form fields
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in'); // Get all elements with 'fade-in' class

// Check and apply fade-in if element is in viewport
function checkFade() {
    fadeEls.forEach(el => {
        // If element is near the viewport, show it with fade-in effect
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.style.opacity = '1'; // Set opacity to 1 (visible)
            el.style.transform = 'translateY(0)'; // Reset position to original
        }
    });
}
checkFade(); // Initial check on page load
window.addEventListener('scroll', checkFade); // Run check on scroll
