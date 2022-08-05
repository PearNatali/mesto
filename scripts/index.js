//Выборка DOM елеметов
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

//открытие и закрытие popup
const popupOpen = function() {
    popupElement.classList.add('popup_opened');
    profileNameElement.textContent = popupInputNameElement.value;
    profileJobElement.textContent = popupInputJobElement.value;
}

const popupClose = function() {
    popupElement.classList.remove('popup_opened');
}

profileOpenButtonElement.addEventListener('click', popupOpen);
popupCloseButtonElement.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameElement = popupInputNameElement.value;
    let jobElement = popupInputJobElement.value;
    profileNameElement.textContent = nameElement;
    profileJobElement.textContent = jobElement;
    popupClose();
}

popupFormElement.addEventListener('submit', formSubmitHandler);


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