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
const popupItemInputNameElement = popupItemFormElement.querySelector('.popup__input_type_name');
const popupItemInputLinkElement = popupItemFormElement.querySelector('.popup__input_type_link');
const templateItemElement = document.querySelector('.item-template').content;
const cardItemElement = document.querySelector('.items-grid__card');
const cardItemPhotoElement = document.querySelector('.items-grid__photo');
const deleteElement = document.querySelector('.items-grid__delete');
const cardItemNameElement = document.querySelector('.items-grid__title');
const cardItemLikeElement  = document.querySelector('.items-grid__like');

//добавление карточек items//внесение значений place и отправка данных
const items = [itemPlaceElement];

function render() {
    items.forEach(renderItem);
}
function createItem(name, link) {
    const newItem = templateItemElement.cloneNode(true);
    cardItemNameElement.textContent = name;
    cardItemNameElement.alt = name;
    cardItemPhotoElement.src = link;
    return newItem;
};

profilePlusButtonElement.addEventListener('click', renderItem);
//cardItemLikeElement.addEventListener('click', likeItem);
cardItemPhotoElement.addEventListener('click', photoOpen);

function renderItem(name, link) {
    items.prepend(createItem(name, link));
}

render();

//Like item
//function likeItem(){
//    cardItemLikeElement.src = 
//}

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

//Выборка DOM елеметов для Zoom
const itemZoomElement = document.querySelector('.popup__zoom');
const itemZoomContainerElement = document.querySelector('.popup__zoom_container');
const itemZoomImgElement = document.querySelector('.popup__zoom_img');
const itemZoomTitleElemnt = document.querySelector('.popup__zoom_title');

//Zoomphoto
function photoOpen(el) {
    itemZoom.classList.add('popup_opened');
    itemZoomImgElement.src = el.currentTarget.closest('.items-grid__photo').src;
    itemZoomTitleElemnt.textContent = el.currentTarget.closest('.items-grid__title').alt;
}

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
popupItemInputNameElement.addEventListener('keypress', formKeypressHandler);

//удаление items
function addItems(el) {
    el.querySelector('.item-grid__button').addEventListener('click', handleDelete);
};
function handleDelete(event) {
   event.target.closest('.items-grid__card').remove();
}