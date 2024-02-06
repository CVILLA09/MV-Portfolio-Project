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

// Project cards settings
const cards = [
  {
    id: '0',
    img: './assets/Snapshoot Portfolio-1.svg',
    alt: 'Tonic',
    name: 'Tonic',
    feature: 'CANOPY',
    feature2: 'Back End Dev',
    feature3: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    language: 'HTML',
    language2: 'Ruby',
    language3: 'CSS',
    language4: 'Javascript',
    framework: 'Bootstrap',
  },
  {
    id: '1',
    img: './assets/Snapshoot Portfolio-2.svg',
    alt: 'Multi-Post Stories',
    name: 'Multi-Post Stories',
    feature: 'FACEBOOK',
    feature2: 'Full Stack Dev',
    feature3: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: 'HTML',
    language2: 'Ruby',
    language3: 'CSS',
    language4: 'Javascript',
    framework: 'Bootstrap',
  },
  {
    id: '2',
    img: './assets/Snapshoot Portfolio-3.svg',
    alt: 'Facebook 360',
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    feature2: 'Full Stack Dev',
    feature3: '2015',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    language: 'HTML',
    language2: 'Ruby',
    language3: 'CSS',
    language4: 'Javascript',
    framework: 'Bootstrap',
  },
  {
    id: '3',
    img: './assets/Snapshoot Portfolio-4.svg',
    alt: 'Uber Navigation',
    name: 'Uber Navigation',
    feature: 'Uber',
    feature2: 'Lead Developer',
    feature3: '2018',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    language: 'HTML',
    language2: 'Ruby',
    language3: 'CSS',
    language4: 'Javascript',
    framework: 'Bootstrap',
  },
];

// SHOW THE CARDS
const showCard = () => {
  const cardContainer = document.querySelector('.work-section');
  cards.forEach((card) => {
    const article = document.createElement('article');
    article.classList.add('work-description');
    article.innerHTML = `
      <figure class="work-image-container multi">
      <img src="${card.img}" alt="${card.alt}" class="work-image"> 
      </figure>
      <div class="work-features-container">
      <h2 class="work-title">${card.name}</h2>
      <ul class="work-features">
          <li class="work-features-item">${card.feature}</li>
          <li class="work-features-item">${card.feature2}</li>
          <li class="work-features-item">${card.feature3}</li>
      </ul>
      <p class="work-paragraph">${card.description}</p>
      <ul class="work-list-container ruby">
          <li class="work-language-item">${card.language}</li>
          <li class="work-language-item">${card.language2}</li>
          <li class="work-language-item">${card.language3}</li>
          <li class="work-language-item">${card.language4}</li>
      </ul>
      <button id="${card.id}" class="work-button">See Project</button>
      </div>
      `;
    cardContainer.appendChild(article);
  });
};
showCard();

// WINDOW POPUP SETTINGS
const popupModal = document.getElementById('popupModal');
const navbarSection = document.querySelector('.main-nav');
const workSection = document.querySelector('.work-section');
const workBtn = document.querySelectorAll('.work-button');

const createPopup = (ind) => {
  const work = cards[ind];
  const {
    img,
    alt,
    name,
    feature,
    feature2,
    feature3,
    description,
    language,
    language2,
    language3,
    language4,
    framework,
  } = work;

  const article = document.createElement('article');
  article.classList.add('popup-description');
  article.innerHTML = `
    <header class="popup-header">
        <h2 class="popup-title">${name}</h2> 
        <img src="assets/Cancel.svg" alt="Close Icon" class="popup-close">
    </header>
    <ul class="popup-features">
        <li class="popup-features-item">${feature}</li>
        <li class="popup-features-item">${feature2}</li>
        <li class="popup-features-item">${feature3}</li>
    </ul>
    <figure class="popup-image-container multi">
        <img src="${img}" alt="${alt}" class="popup-image"> 
    </figure>
    <div class="popup-features-container">
        <p class="popup-paragraph">${description}</p>
        <div class="popup-bottom-container">
        <ul class="popup-list-container">
        <li class="popup-language-item">${language}</li>
        <li class="popup-language-item">${language3}</li>
        <li class="popup-language-item">${language4}</li>
        </ul>
        <ul class="popup-list-container second-row">
        <li class="popup-language-item">${language2}</li>
        <li class="popup-language-item">${framework}</li>
        </ul>
            <div class="about-btn-container">
                    <a href="https://cvilla09.github.io/Portfolio/" target="_blank" class="popup-button">
                    See live
                    <img src="assets/circle-arrow.svg" alt="Circle Arrow" class="button-icon">
                    </a>
                    <a href="https://github.com/CVILLA09/Portfolio" target="_blank" class="popup-button">
                    See source
                    <img src="assets/gitcat.svg" alt="Github Icon" class="button-icon">
                    </a>
            </div>
        </div>    
    </div>
    `;
  popupModal.appendChild(article);

  document.body.style.overflow = 'hidden';

  const closePopup = document.querySelector('.popup-close');
  closePopup.addEventListener('click', () => {
    workSection.classList.remove('blurEffect');
    navbarSection.style.display = 'flex';
    document.body.style.overflow = 'scroll';
    popupModal.removeChild(article);
    workBtn.forEach((btn) => {
      btn.classList.remove('press');
    });
  });
};

// WORK BUTTON
workBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('press');
    const ind = e.target.id;
    createPopup(ind);
    workSection.classList.add('blurEffect');
    navbarSection.style.display = 'none';
  });
});

// Validation contact form
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const alertIcon = '<img class="error-icon" src="assets/alert.svg" alt="alert icon">';
form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    emailError.innerHTML = `${alertIcon}Oops! Uppercase email alert! Lowercase, please!${alertIcon}`;
  } else {
    emailError.textContent = '';
  }
});

// Select elements
const nameInput = document.getElementById('fullname');
const emInput = document.getElementById('email');
const messageInput = document.getElementById('comment');

// Preserve User Data in Browser
[nameInput, emInput, messageInput].forEach((inputField) => {
  inputField.addEventListener('input', () => {
    let user = {
      fullname: nameInput.value,
      email: emInput.value,
      comment: messageInput.value,
    };
    user = JSON.stringify(user);
    localStorage.setItem('user', user);
  });
});

// Load data from Browser
window.addEventListener('load', () => {
  const userValue = localStorage.getItem('user');
  if (userValue) {
    const userObject = JSON.parse(userValue);
    nameInput.value = userObject.fullname || '';
    emInput.value = userObject.email || '';
    messageInput.value = userObject.comment || '';
  }
});
