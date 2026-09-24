console.log('script.js loaded');

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

/**
 * Menu button for smaller screens
 */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

/** 
Dropdown menus
*/
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(function (btn) {
  const menu = btn.nextElementSibling;
  console.log('attached listener to', btn.textContent);

  btn.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('button clicked:', btn.textContent);

    const isOpen = menu.classList.contains('show');
    closeAllDropdowns();

    if (!isOpen) {
      menu.classList.add('show');
    }
  });
});

/**
 * Closes every dropdown menu.
 */
function closeAllDropdowns(){
  document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
    menu.classList.remove('show');
  });
}

/**
 * Clicking anywherre outside the navbar closes any open dropdown.
 */
document.addEventListener('click', function (event) {
  if (!navMenu.contains(event.target)) {
    closeAllDropdowns();
  }
});