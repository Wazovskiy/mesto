let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__submit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let textFirst = document.querySelector('#first');
let textSecond = document.querySelector('#second');
let profileHeadText = document.querySelector('.profile__text-head');
let profileText = document.querySelector('.profile__text-simple');

editButton.addEventListener('click', editButtonFunction);
popupClose.addEventListener('click', editButtonFunction);
saveButton.addEventListener('click', saveButtonFunction);

function editButtonFunction() {
    // editButton.setAttribute('style', 'background-color:  white');
    popup.classList.toggle('popup_opened');
    textFirst.value = `${profileHeadText.textContent}`;
    textSecond.value = `${profileText.textContent}`;
};

function saveButtonFunction(evt) {
    evt.preventDefault();
    profileHeadText.textContent = `${textFirst.value}`;
    profileText.textContent = `${textSecond.value}`;
    popup.classList.toggle('popup_opened');
};

