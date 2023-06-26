// Select elements
var hamburgerIcon = document.getElementById("hamburger-icon");
var closeIcon = document.getElementById("close-icon");
var mobileMenu = document.getElementById("mobile-menu");
var menuLinks = mobileMenu.getElementsByTagName("a");

// Function to show mobile menu
function showMobileMenu() {
  mobileMenu.classList.add("visible");
}

// Function to hide mobile menu
function hideMobileMenu() {
  mobileMenu.classList.remove("visible");
}

// Add event listeners
hamburgerIcon.addEventListener("click", showMobileMenu);
closeIcon.addEventListener("click", hideMobileMenu);

// Add event listeners to menu links
for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", hideMobileMenu);
}
