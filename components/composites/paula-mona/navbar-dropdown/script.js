const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const dropdownBtn = document.querySelector('.dropdown-btn');

/**
 * Menu button for smaller screens
 */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});