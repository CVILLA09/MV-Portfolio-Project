// Select elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.getElementsByTagName('a');

// Function to show mobile menu
function showMobileMenu() {
  mobileMenu.classList.add('visible');
}

// Function to hide mobile menu
function hideMobileMenu() {
  mobileMenu.classList.remove('visible');
}

// Add event listeners
hamburgerIcon.addEventListener('click', showMobileMenu);
closeIcon.addEventListener('click', hideMobileMenu);

// Add event listeners to menu links
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideMobileMenu);
}
