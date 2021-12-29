const settingsButton = document.querySelector('.header__profile-cog');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.video-cards__close-button');
const profileName = document.querySelector('.header__profile-name');
const nameInput = document.querySelector('.popup__name-input');
const form = document.querySelector('.popup__form');


function togglePopup () {
  popup.classList.toggle('popup_active');
}

settingsButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
})
