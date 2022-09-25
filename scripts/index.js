//Выборка DOM елеметов для редактирования профиля.
const popupElement = document.querySelector('.popup'); //Сам попап по ред.профиля. 
const popupFormElement = popupElement.querySelector('.popup__content'); //Содержание попап по ред.профилю. 
const popupCloseButtonElement = popupElement.querySelector('.popup__close'); //Закрытие попап по ред.профиля.

const popupInputNameElement = popupFormElement.querySelector('.popup__input_type_name'); //Имя в попап.
const popupInputJobElement = popupFormElement.querySelector('.popup__input_type_job'); //Профессия в попап.

const profileElement = document.querySelector('.profile'); //Форма внесения данных профиля
const profileNameElement = profileElement.querySelector('.profile__title'); //Имя формы профиля.
const profileJobElement = profileElement.querySelector('.profile__subtitle'); //Профессия формы профиля.

const profileOpenButtonElement = profileElement.querySelector('.profile__pen'); //Кнопка редактирования профиля. 
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для добавления новых карточек.
const popupItemElement = document.querySelector('.popup__item'); //Сам попап по доб.карточки.
const popupItemFormElement = popupItemElement.querySelector('.popup__content_item'); //Содержание попап по доб.карточки. 
const popupItemCloseButtonElement = popupItemElement.querySelector('.popup__close_item'); //Закрытие попап по доб.карточки.
const popupItemButtonElement = popupItemFormElement.querySelector('.popup__submit-btn_item'); //Кнопка "Создать" в карточке. 

const popupItemInputTitleElement = popupItemFormElement.querySelector('.popup__input_type_title'); //Название места в попап.
const popupItemInputLinkElement = popupItemFormElement.querySelector('.popup__input_type_link'); //Ссылка на картинку в попап.

const itemPlaceElement = document.querySelector('.items-grid'); //Сам контейнер для новых карточек.
const itemTableElement = itemPlaceElement.querySelector('.items-grid__table'); //Содержимое контейнера для новых карточек. 

const profilePlusButtonElement = profileElement.querySelector('.profile__button'); //Кнопка добавления карточеки.
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для попапа zoom каринки.
const popupZoomElement = document.querySelector('.popup__zoom'); //Сам попап zoom картинки. 
const popupZoomContainerElement = popupZoomElement.querySelector('.popup__zoom_container'); //Содержание попап zoom картинки. 
const popupZoomCloseButtonElement = popupZoomElement.querySelector('.popup__zoom_close'); //Закрытие попап zoom картинки.

const popupZoomImgElement = popupZoomElement.querySelector('.popup__zoom_img'); //Открытая картинка.
const popupZoomTitleElement = popupZoomElement.querySelector('.popup__zoom_title'); //Подпись открытой картинки.
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для других функций с карточками.
const templateItemElement = newItemElement.querySelector('.items-grid__card').content; //Форма для новой карточки.
const itemLinkElement = templateItemElement.querySelector('.items-grid__photo'); //Картинка в карточке;
const itemTitleElement = templateItemElement.querySelector('.items-grid__title'); //Подпись карточки;
const itemLikeElement = templateItemElement.querySelector('.items-grid__like'); //Лайк карточки;
const itemDeleteElement = templateItemElement.querySelector('.items-grid__delete'); //Удаление карточки;
//-----------------------------------------------------------------------------------------------------------------
//Функция открытия попап:
function popupOpen(el) {
    el.classList.add('popup_opened');
};
// Открытие попапа ред.профиля:
profileOpenButtonElement.addEventListener('click', function() {
    popupOpen(popupElement);
});
// Открытие попапа доб.карточки:
profilePlusButtonElement.addEventListener('click', function() {
    popupOpen(popupItemElement);
});
// Открытие попапа zoom картинки:
popupZoomImgElement.addEventListener('click', function() {
    popupOpen(popupZoomElement);
});
//-----------------------------------------------------------------------------------------------------------------
//Закрытие попап:
function popupClose(el) {
    el.classList.remove('popup_opened');
};
// Закрытие попапа ред.профиля:
popupCloseButtonElement.addEventListener('click', function() {
    popupClose(popupElement);
});
popupCloseButtonElement.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupClose(popupElement);
    };
});
// Закрытие попапа доб.карточки:
popupItemCloseButtonElement.addEventListener('click', function() {
    popupClose(popupItemElement);
});
popupItemCloseButtonElement.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupClose(popupItemElement);
    };
});
popupZoomCloseButtonElement.addEventListener('click', function popupOpen(event) {
    if(event.target === event.currentTarget) {
        popupClose(popupZoomElement);
    };
});
//-----------------------------------------------------------------------------------------------------------------
//Работа с сайтом:
//Создание массива карточек items.
const items = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
//-----------------------------------------------------------------------------------------------------------------
//Добавление новой карточки:
//Задаем функцию создания новой карточки:
function createCard(item) {
    const newItem = templateItemElement.cloneNode(true);
    //Передача данных карточек в templete - элемент:
    itemLinkElement.src = item['link'];
    itemTitleElement.alt = item['name'];
    itemLinkElement.innetText = item['name'];
    return newItem;
};
//Функция лайка:
itemLikeElement.addEventListener('click', function(event){
    event.target.classList('.items-grid__like');
});
//Функция удаления карточки:
itemDeleteElement.addEventListener('click', function(){
    templateItemElement.remove();
});
//Функция zoom картинки:
itemLinkElement.addEventListener('click', function(item){
    popupOpen(popupZoomElement);
    itemLinkElement.src = item['link'];
    itemTitleElement.alt = item['name'];
    itemLinkElement.innerText = item['name'];       
});
//-----------------------------------------------------------------------------------------------------------------
//Перебираем каждый элемент массива:
items.forEach((element) => {
    const newItems = createCard(element);
    itemTableElement.append(newItems);
});
//-----------------------------------------------------------------------------------------------------------------
//Функция добавления карточки:
function addCard(links, names) {
    const item = {
        name: names,
        link: links
    }
    const itemElement = createCard(item);
    itemTableElement.prepend(itemElement);
};
//-----------------------------------------------------------------------------------------------------------------
//Функция сохранения/отправки данных по новой карточке.
function submitButtonItemElement(evt) {
    addCard(popupItemInputTitleElement.value, popupItemInputLinkElement.value);
    evt.preventDefault();
    popupClose(popupItemElement);
};
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных новой карточки.
popupItemFormElement.addEventListener('submit', submitButtonItemElement);
//-----------------------------------------------------------------------------------------------------------------
//Изменение значений в шапке профиля
function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameElement = popupInputNameElement.value;
    let jobElement = popupInputJobElement.value;
    profileNameElement.textContent = nameElement;
    profileJobElement.textContent = jobElement;
    popupClose(popupElement);
};
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных ред.профиля.
popupFormElement.addEventListener('submit', formSubmitHandler);