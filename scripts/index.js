const settingsButton = document.querySelector('.header__profile-cog');
const profilePopup = document.querySelector('.popup_type_profile');
const addVideoPopup = document.querySelector('.popup_type_add');
const profileCloseButton = document.querySelector('.video-cards__close-button');
const addVideoCloseButton = document.querySelector('.add-video-close-button');
const profileName = document.querySelector('.header__profile-name');
const nameInput = document.querySelector('.popup__name-input');
const newVideoTitleInput = document.querySelector('.popup__video-title-input');
const newVideoUrlInput = document.querySelector('.popup__video-url-input');
const form = document.querySelector('.popup__form');
const addVideoForm = document.querySelector('.popup__add-video-form');
const videoListTemplate = document.querySelector('#video-list-template');
const videoCardList = document.querySelector('.video-cards__list');
const addVideoButton = document.querySelector('.add-video-button');




const initialCards = [
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  },
  {
    link: 'https://www.youtube.com/embed/QWGC2KI9jwk',
    title: 'Arpo video'
  }
];

function createCard (card) {
  let newCardElement = videoListTemplate.content.querySelector('.video-cards__card').cloneNode(true);
  newCardElement.querySelector('.video-cards__iframe').src = card.link;
  newCardElement.querySelector('.video-cards__video-title').textContent = card.title;
  newCardElement.querySelector('.video-cards__delete').addEventListener('click', (event) => {
    event.target.closest('.video-cards__card').remove();
  })
  return newCardElement;
}

function renderCard (card) {
  videoCardList.appendChild(card);
}

initialCards.forEach((card) => {
  renderCard(createCard(card));
})

function togglePopup (popup) {
  popup.classList.toggle('popup_active');
}

function handleNewVideoSubmit (event) {
  event.preventDefault();
  let newCard = {};
  newCard.title = newVideoTitleInput.value;
  newCard.link = newVideoUrlInput.value;
  renderCard(createCard(newCard));

}

settingsButton.addEventListener('click', () => togglePopup(profilePopup));
profileCloseButton.addEventListener('click', () => togglePopup(profilePopup));
addVideoCloseButton.addEventListener('click', () => togglePopup(addVideoPopup));

form.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
})

addVideoButton.addEventListener('click', function (event) {
  togglePopup(addVideoPopup);
})

addVideoForm.addEventListener('submit', (event) => {
  handleNewVideoSubmit(event);
  togglePopup(addVideoPopup);
});