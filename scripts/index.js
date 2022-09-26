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

const popupZoomImgElement = popupZoomElement.querySelector('.popup__zoom_img'); //Картинка в карточке;
const popupZoomTitleElement = popupZoomElement.querySelector('.popup__zoom_title'); //Подпись карточки;
//-----------------------------------------------------------------------------------------------------------------
//Функция открытия попап:
function popupOpen(popup) {
    popup.classList.add('popup_opened');
};
// Открытие попапа ред.профиля:
profileOpenButtonElement.addEventListener('click', function() {
    popupOpen(popupElement);
});
// Открытие попапа доб.карточки:
profilePlusButtonElement.addEventListener('click', function() {
    popupOpen(popupItemElement);
});
//-----------------------------------------------------------------------------------------------------------------
//Закрытие попап:
function popupClose(popup) {
    popup.classList.remove('popup_opened');
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
// Закрытие попапа zoom карточки:
popupZoomCloseButtonElement.addEventListener('click', function() {
    popupClose(popupZoomElement);
});
popupZoomCloseButtonElement.addEventListener('click', function (event) {
    if(event.target === event.currentTarget) {
        popupClose(popupZoomElement);
    };
});
//-----------------------------------------------------------------------------------------------------------------
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
//Работа с сайтом:
//Задаем функцию создания новой карточки:
function createCard(item) {
    //Выборка DOM елеметов для других функций с карточками.
    const templateItemElement = document.querySelector('.item-template').content; //Поиск контента темплит элемента.
    const itemLinkElement = templateItemElement.querySelector('.items-grid__photo'); //Поиск внутри него картинки.
    const itemTitleElement = templateItemElement.querySelector('.items-grid__title'); //Поиск внутри названия картинки. 
    //Передача данных карточек в templete - элемент:
    itemLinkElement.src = item['link'];
    itemLinkElement.alt = item['name'];
    itemTitleElement.innerText = item['name'];
    const newItem = templateItemElement.cloneNode(true);
    //Функция лайка:
    const itemLikeElement = newItem.querySelector('.items-grid__like'); //Лайк карточки;
    itemLikeElement.addEventListener('click', function(event) {
        event.target.classList.toggle('items-grid__like_active');
    });
    //Функция удаления:
    const itemDeleteElements = newItem.querySelector('.items-grid__delete'); //Удаление карточки;
    itemDeleteElements.addEventListener('click', function(event) {
        event.target.closest('.items-grid__card').remove();
    });
    //Функция zoom картинки:
    const zoomPhoto = newItem.querySelector('.items-grid__photo'); //Поиск новой картинки
    zoomPhoto.addEventListener('click', function() {
            popupOpen(popupZoomElement);
            popupZoomImgElement.src = item['link'];
            popupZoomImgElement.alt = item['name'];
            popupZoomTitleElement.innerText = item['name'];  
        });   
    return newItem;
};
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
    addCard(popupItemInputLinkElement.value, popupItemInputTitleElement.value);
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