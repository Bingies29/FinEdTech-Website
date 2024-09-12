// form-validation.js

// Function to validate the contact form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector('textarea').value;
  
      if (!email || !message) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill out all fields.');
      } else if (!validateEmail(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  
    // Helper function to validate email format
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  