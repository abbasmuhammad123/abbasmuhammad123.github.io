// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) { // Add event listener for form submission
    e.preventDefault(); // Prevent actual form submission

    // Show loading indicator
    const submitBtn = document.getElementById('submitBtn'); // Get the submit button element
    const loadingIndicator = document.getElementById('loadingIndicator'); // Get the loading indicator element
    const submitText = submitBtn.querySelector('span'); // Get the span inside the submit button to hide text

    submitText.style.opacity = '0'; // Hide the submit text
    loadingIndicator.style.display = 'block'; // Show the loading indicator

    // Simulate form processing
    setTimeout(function() { // Simulate a delay for processing
        // Hide loading indicator
        submitText.style.opacity = '1'; // Show the submit text again
        loadingIndicator.style.display = 'none'; // Hide the loading indicator

        // Show success message
        document.getElementById('formSuccess').style.display = 'block'; // Display success message
        document.getElementById('formError').style.display = 'none'; // Hide error message if visible

        // Reset form
        e.target.reset(); // Reset form fields

        // Hide success message after 5 seconds
        setTimeout(function() { // Set timeout to hide success message
            document.getElementById('formSuccess').style.display = 'none'; // Hide the success message
        }, 5000); // After 5 seconds
    }, 1500); // Simulated processing time of 1.5 seconds
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item'); // Select all FAQ items

faqItems.forEach(item => { // Loop through each FAQ item
    const question = item.querySelector('.faq-question'); // Get the question element within the item

    question.addEventListener('click', () => { // Add click event listener to the question
        // Close all other items
        faqItems.forEach(otherItem => { // Loop through all FAQ items
            if (otherItem !== item && otherItem.classList.contains('active')) { // If not the current item and is active
                otherItem.classList.remove('active'); // Remove active class
            }
        });

        // Toggle current item
        item.classList.toggle('active'); // Toggle active class on current item
    });
});

// Form validation
const form = document.getElementById('contactForm'); // Get the contact form element
const inputs = form.querySelectorAll('input[required], textarea[required], select[required]'); // Select all required input fields

inputs.forEach(input => { // Loop through each required input
    input.addEventListener('blur', function() { // Add blur event for validation
        validateInput(this); // Validate input when it loses focus
    });

    input.addEventListener('input', function() { // Add input event for live validation
        validateInput(this); // Validate input on every keystroke
    });
});

function validateInput(input) { // Function to validate an input field
    if (input.checkValidity()) { // Check if input is valid
        input.style.borderColor = '#ddd'; // Set border color to neutral if valid
    } else { // If not valid
        input.style.borderColor = '#d32f2f'; // Set border color to red to indicate error
    }
}
