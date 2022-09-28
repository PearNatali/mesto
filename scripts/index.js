//Выборка DOM елеметов для редактирования профиля.
const profilePopup = document.querySelector('.popup_profile'); //Сам попап по ред.профиля. 
const profileForm = profilePopup.querySelector('.popup__content_profile'); //Содержимое попапа.
const profileCloseButton = profilePopup.querySelector('.popup__close_profile'); //Закрытие попап по ред.профиля.

const profilePopupInputName = profileForm.querySelector('.popup__input_type_name'); //Имя в попап.
const profilePopupInputJob = profileForm.querySelector('.popup__input_type_job'); //Профессия в попап.

const profileElement = document.querySelector('.profile'); //Форма внесения данных профиля
const profileName = profileElement.querySelector('.profile__title'); //Имя формы профиля.
const profileJob = profileElement.querySelector('.profile__subtitle'); //Профессия формы профиля.

const profileOpenButton = profileElement.querySelector('.profile__pen'); //Кнопка редактирования профиля. 
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для добавления новых карточек.
const itemPopup = document.querySelector('.popup_item'); //Сам попап по доб.карточки.
const itemForm = itemPopup.querySelector('.popup__content_item'); //Содержание попап по доб.карточки. 
const itemCloseButton = itemPopup.querySelector('.popup__close_item'); //Закрытие попап по доб.карточки.

const itemPopupInputTitle = itemPopup.querySelector('.popup__input_type_title'); //Название места в попап.
const itemPopupInputLink = itemPopup.querySelector('.popup__input_type_link'); //Ссылка на картинку в попап.

const itemCard = document.querySelector('.card'); //Сам контейнер для новых карточек.
const itemCardTable = itemCard.querySelector('.card__table'); //Содержимое контейнера для новых карточек. 

const itemOpenButton = profileElement.querySelector('.profile__button'); //Кнопка добавления карточеки.
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для попапа zoom каринки.
const zoomPopup = document.querySelector('.popup_zoom'); //Сам попап zoom картинки. 
const zoomCloseButton = zoomPopup.querySelector('.popup__close_zoom'); //Закрытие попап zoom картинки.

const zoomPopupImg = zoomPopup.querySelector('.popup__img_zoom'); //Картинка в карточке;
const zoomPopupTitle = zoomPopup.querySelector('.popup__title_zoom'); //Подпись карточки;
//-----------------------------------------------------------------------------------------------------------------
//Функция открытия попап:
function openPopup(popup) {
    popup.classList.add('popup_opened');
};
// Открытие попапа ред.профиля:
profileOpenButton.addEventListener('click', function() {
    openPopup(profilePopup);
    profilePopupInputName.value = profileName.innerText;
    profilePopupInputJob.value = profileJob.innerText;
});
// Открытие попапа доб.карточки:
itemOpenButton.addEventListener('click', function() {
    openPopup(itemPopup);
});
//-----------------------------------------------------------------------------------------------------------------
//Функция закрытия попапа:
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};
//Универсальная функция закрытия для всх попапов:
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup))
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
function createCard(link, name) {
    //Выборка DOM елеметов для других функций с карточками.
    const cardTemplate = document.querySelector('.card-template').content; //Поиск контента темплит элемента.
    const newItem = cardTemplate.cloneNode(true);
    const cardPhoto = newItem.querySelector('.card__photo'); //Поиск внутри него картинки.
    const cardTitle = newItem.querySelector('.card__title'); //Поиск внутри названия картинки. 
    //Передача данных карточек в templete - элемент:
    cardPhoto.src = link;
    cardPhoto.alt = name;
    cardTitle.innerText = name;
    //Функция лайка:
    const cardLikeButton = newItem.querySelector('.card__button_like'); //Лайк карточки;
    cardLikeButton.addEventListener('click', function(event) {
        event.target.classList.toggle('card__button_like_active');
    });
    //Функция удаления:
    const cardDeleteButton = newItem.querySelector('.card__button_delete'); //Удаление карточки;
    cardDeleteButton.addEventListener('click', function(event) {
        event.target.closest('.card__item').remove();
    });
    //Функция zoom картинки:
    cardPhoto.addEventListener('click', function() {
            openPopup(zoomPopup);
            zoomPopupImg.src = link;
            zoomPopupImg.alt = name;
            zoomPopupTitle.innerText = name;  
        });  
    return newItem;
};
//-----------------------------------------------------------------------------------------------------------------
//Перебираем каждый элемент массива:
items.forEach((item) => {
    const newCard = createCard(item.link, item.name);
    itemCardTable.append(newCard);
});
//-----------------------------------------------------------------------------------------------------------------
//Функция сохранения/отправки данных по новой карточке.
function submitItemElement(evt) {
    evt.preventDefault();
    const newCard = createCard(itemPopupInputLink.value, itemPopupInputTitle.value);
    itemCardTable.prepend(newCard);
    itemForm.reset();
    closePopup(itemPopup);
};
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных новой карточки.
itemForm.addEventListener('submit', submitItemElement);
//-----------------------------------------------------------------------------------------------------------------
//Изменение значений в шапке профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    const name = profilePopupInputName.value;
    const job = profilePopupInputJob.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    closePopup(profilePopup);
};
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных ред.профиля.
profileForm.addEventListener('submit', handleProfileFormSubmit);