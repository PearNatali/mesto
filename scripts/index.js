//Выборка DOM елеметов для редактирования профиля
const pageElement = document.querySelector('.page');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile');
const profileOpenButtonElement = profileElement.querySelector('.profile__pen');
const profileInfoElement = profileElement.querySelector('.profile__editform');
const popupFormElement = popupElement.querySelector('.popup__content');
const profileNameElement = profileInfoElement.querySelector('.profile__title');
const profileJobElement = profileInfoElement.querySelector('.profile__subtitle');
const popupInputNameElement = popupFormElement.querySelector('.popup__input_type_name');
const popupInputJobElement = popupFormElement.querySelector('.popup__input_type_job');

//Выборка DOM елеметов для добавления новых карточек
const popupItemElement = document.querySelector('.popup__item');
const profilePlusButtonElement = profileElement.querySelector('.profile__button');
const itemPlaceElement = document.querySelector('.items-grid');
const itemTableElement = itemPlaceElement.querySelector('.items-grid__table');
const popupItemCloseButtonElement = popupItemElement.querySelector('.popup__close_item'); 
const popupItemFormElement = popupItemElement.querySelector('.popup__content_item');
const popupItemInputTitleElement = popupItemFormElement.querySelector('.popup__input_type_title');
const popupItemInputLinkElement = popupItemFormElement.querySelector('.popup__input_type_link');
const templateItemElement = document.querySelector('.item-template').content;
const popupItemButtonElement = document.querySelector('.popup__submit-btn_item');

//добавление карточек items
const items = [
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	}
];

function render() {
    items.forEach(renderItem);
}
function renderItem(cardData) {
    const newItem = templateItemElement.cloneNode(true);
    newItem.querySelector('.items-grid__photo').src = cardData.link;
    newItem.querySelector('.items-grid__title').innerText = cardData.name;
    itemTableElement.appendChild(newItem);
};
popupItemFormElement.addEventListener('submit', function cardData(link, name) {
    link = popupItemInputLinkElement;
    name = popupItemInputTitleElement;
});
render();

//открытие popup "редактирование профиля" и "добавление карточек":
const buttonarray = [popupElement, popupItemElement]
const popupOpen = function(index) {
    buttonarray[index].classList.toggle('popup_opened');
    popupInputNameElement.textContent = profileNameElement.value;
    popupInputJobElement.textContent = profileJobElement.value;

};
profileOpenButtonElement.addEventListener('click', ()=> popupOpen(0));
profilePlusButtonElement.addEventListener('click', ()=> popupOpen(1));

//закрытие popup "редактирование профиля" и "добавление карточек"
const popupClose = function() {
    popupElement.classList.remove('popup_opened');
    popupItemElement.classList.remove('popup_opened');
};
popupCloseButtonElement.addEventListener('click', popupClose);
popupItemCloseButtonElement.addEventListener('click', popupClose);

//Изменение значений в шапке профиля
function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameElement = popupInputNameElement.value;
    let jobElement = popupInputJobElement.value;
    profileNameElement.textContent = nameElement;
    profileJobElement.textContent = jobElement;
    popupClose();
}

popupFormElement.addEventListener('submit', formSubmitHandler);

function formKeypressHandler (e) {
    if (e.keyCode === 13) {
        addItem();
        popupClose();
    };
};       
popupInputNameElement.addEventListener('keypress', formKeypressHandler);
popupInputJobElement.addEventListener('keypress', formKeypressHandler);
popupItemInputLinkElement.addEventListener('keypress', formKeypressHandler);
popupItemInputTitleElement.addEventListener('keypress', formKeypressHandler);