let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__submit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let textFirst = document.querySelector('#first');
let textSecond = document.querySelector('#second');
let profileHeadText = document.querySelector('.profile__text-head');
let profileText = document.querySelector('.profile__text-simple');
let saveForm = document.querySelector('.form');

editButton.addEventListener('click', editButtonFunction);
popupClose.addEventListener('click', editButtonFunction);
saveForm.addEventListener('submit', saveButtonFunction);

function editButtonFunction() {
    popup.classList.toggle('popup__opened');
    textFirst.value = `${profileHeadText.textContent}`;
    textSecond.value = `${profileText.textContent}`;
};

function saveButtonFunction(evt) {
    evt.preventDefault();
    profileHeadText.textContent = `${textFirst.value}`;
    profileText.textContent = `${textSecond.value}`;
    editButtonFunction();
};

let like = document.querySelector('.elements__like');
like.addEventListener('click', addlike);
function addlike() {
    like.classList.toggle('elements__like_active');
};