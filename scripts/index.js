//Выборка DOM елеметов для редактирования профиля.
const popupElement = document.querySelector('.popup'); 
const popupFormElement = popupElement.querySelector('.popup__content');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const popupInputNameElement = popupFormElement.querySelector('.popup__input_type_name');
const popupInputJobElement = popupFormElement.querySelector('.popup__input_type_job');

const profileElement = document.querySelector('.profile');
const profileNameElement = profileElement.querySelector('.profile__title');
const profileJobElement = profileElement.querySelector('.profile__subtitle');

const profileOpenButtonElement = profileElement.querySelector('.profile__pen');
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для добавления новых карточек.
const popupItemElement = document.querySelector('.popup__item'); 
const popupItemFormElement = popupItemElement.querySelector('.popup__content_item'); 
const popupItemCloseButtonElement = popupItemElement.querySelector('.popup__close_item'); 
const popupItemButtonElement = popupItemFormElement.querySelector('.popup__submit-btn_item'); 

const popupItemInputTitleElement = popupItemFormElement.querySelector('.popup__input_type_title'); 
const popupItemInputLinkElement = popupItemFormElement.querySelector('.popup__input_type_link'); 

const itemPlaceElement = document.querySelector('.items-grid'); 
const itemTableElement = itemPlaceElement.querySelector('.items-grid__table'); 

const profilePlusButtonElement = profileElement.querySelector('.profile__button'); 
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для попапа zoom каринки.
const popupZoomElement = document.querySelector('.popup__zoom'); 
const popupZoomContainerElement = popupZoomElement.querySelector('.popup__zoom_container'); 
const popupZoomCloseButtonElement = popupZoomElement.querySelector('.popup__zoom_close');

const popupZoomImgElement = popupZoomElement.querySelector('.popup__zoom_img');
const popupZoomTitleElement = popupZoomElement.querySelector('.popup__zoom_title');
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для других функций с карточками.
const templateItemElement = document.querySelector('.item-template').content; 
const itemLinkElement = templateItemElement.querySelector('.items-grid__photo');
const itemTitleElement = templateItemElement.querySelector('.items-grid__title');
//-----------------------------------------------------------------------------------------------------------------
function popupOpen(popup) {
    popup.classList.add('popup_opened');
};
profileOpenButtonElement.addEventListener('click', function() {
    popupOpen(popupElement);
});
profilePlusButtonElement.addEventListener('click', function() {
    popupOpen(popupItemElement);
});
//-----------------------------------------------------------------------------------------------------------------
function popupClose(popup) {
    popup.classList.remove('popup_opened');
};
popupCloseButtonElement.addEventListener('click', function() {
    popupClose(popupElement);
});
popupCloseButtonElement.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupClose(popupElement);
    };
});
popupItemCloseButtonElement.addEventListener('click', function() {
    popupClose(popupItemElement);
});
popupItemCloseButtonElement.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        popupClose(popupItemElement);
    };
});
popupZoomCloseButtonElement.addEventListener('click', function() {
    popupClose(popupZoomElement);
});
popupZoomCloseButtonElement.addEventListener('click', function (event) {
    if(event.target === event.currentTarget) {
        popupClose(popupZoomElement);
    };
});
//-----------------------------------------------------------------------------------------------------------------
//Работа с сайтом:
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
//Добавление новой карточки:
//Задаем функцию создания новой карточки:
function createCard(item) {
    //Передача данных карточек в templete - элемент:
    itemLinkElement.src = item['link'];
    itemLinkElement.alt = item['name'];
    itemTitleElement.innerText = item['name'];
    const newItem = templateItemElement.cloneNode(true);
    const itemLikeElement = newItem.querySelector('.items-grid__like'); //Лайк карточки;
     //Функция лайка:
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
    const itemNewTitleElement = newItem.querySelector('.items-grid__title'); //Поиск новой картинки
    zoomPhoto.addEventListener('click', function(event) {
            debugger 
            event.target.closest('.items-grid__photo');
            popupOpen(popupZoomElement);
            zoomPhoto.src = popupZoomImgElement['link'];
            zoomPhoto.alt = popupZoomImgElement['name'];
            itemNewTitleElement.innerText = popupZoomTitleElement['name'];  
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