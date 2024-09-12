// animations.js

// Function to fade in elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
  
    function onScroll() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
  
        if (elementTop < window.innerHeight && elementBottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  
    // Initial check
    onScroll();
    // Check on scroll
    window.addEventListener('scroll', onScroll);
  });
  