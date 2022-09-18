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

//добавление карточек items
const items = [itemPlaceElement];
function render() {
    items.forEach(renderItem);
}
function renderItem(link, text) {
    const newItem = templateItemElement.cloneNode(true);
    newItem.querySelector('.items-grid__photo').innerText = link;
    newItem.querySelector('.items-grid__title').innerText = text;
    itemTableElement.appendChild(newItem);
};
function addItem(evt) {
    renderItem(popupItemInputLinkElement.value, popupItemInputTitleElement.value);
}
addItem();
profilePlusButtonElement.addEventListener('click', addItem);
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

//function formClear () {
//    if (nameElemente !== '') {
//    nameElemente = '';
//    jobElement = '';
//}
//popupInputNameElement.addEventListener('click', formClear);


//function formSubmitHandler (evt) {
//    if (evt.value === evt.value.replace(/[^0-9], '')) {
//        return;
//    }
//    else {
//        evt.preventDefault();
//        popupInputNameElement.value = '';
//        popupInputJobElement.value = '';
//    }
//};




























//popupSabmitElement.addEventListener('submit', popupOpen);
//popupSabmitElement.addEventListener('submit', formSubmitHandler);

//function formSubmitHandler (event) {
//        event.preventDefault();
//        popupOpen();
//        popupClose();
    
//}


//       let nameElement = popupInputNameElement.value;
//        let jobElement = popupInputJobElement.value;
//        profileNameElement.textContent = nameElement;
//        profileJobElement.textContent = jobElement;
//        popupClose();
//    }

//const popupCloseByClickOnOverlay = function(event) {
//    //console.log(event.target, event.currentTarget);
//    if (event.target !== event.currentTarget) {
//        return;
//    }
//    popupClose();
//}
//popupElement.addEventListener('click', popupCloseByClickOnOverlay);

//function formKeypressHandler (e) {
//        if (e.keyCode === 13) {
//            let nameElement = popupInputNameElement.value;
//            let jobElement = popupInputJobElement.value;
//            profileNameElement.textContent = nameElement;
//            profileJobElement.textContent = jobElement; 
//            popupClose();
//        };
//}        
//    popupInputNameElement.addEventListener('keypress', formKeypressHandler);
//    popupInputJobElement.addEventListener('keypress', formKeypressHandler);

//function formClear () {
//    nameElemente = '';
//    jobElement = '';
//}
//   popupInputNameElement.addEventListener('click', formClear);


//function formSubmitHandler (event) {
//    if (this.value === this.value.replace(/[^0-9], '')) {
//        return;
//    }
//    else {
//        evt.preventDefault();
//        popupInputNameElement.value = '';
//        popupInputJobElement.value = '';
//    }
//    profileNameElement.textContent = popupInputNameElement.value;
//  profileJobElement.textContent = popupInputJobElement.value;
//}

//popupSabmitElement.addEventListener('submit', formSubmitHandler);