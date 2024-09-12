// main.js

// Function to toggle the navigation menu on small screens
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');
  
    navbarToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });
  });
  
  // Example of a function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Adding event listener to a button to scroll to top
  const scrollToTopButton = document.querySelector('#scrollToTopButton');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }
  