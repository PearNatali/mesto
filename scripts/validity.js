const formAddItem = document.forms.userForm;
const formUser = document.forms.addForm;

const errorMessages = {
    empty: 'Это обязательное поле',
    wrongLength: 'Должзно быть от 2 до 30 символов',
    wrongUrl: 'Здесь должна быть ссылка',
}

function isValid(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity(errorMessages.empty);
        submitButton.classList.add('popup__submit_disable');
        input.classList.add('popup__input_error');
        return false;
    }
    if (input.validity.tooLong || input.validity.tooShort) {
        input.setCustomValidity(errorMessages.wrongLength);
        submitButton.classList.add('popup__submit_disable');
        input.classList.add('popup__input_error');
        return false;
    }
    if (input.validity.typeMismatch) {
        input.setCustomValidity(errorMessages.wrongUrl);
        submitButton.classList.add('popup__submit_disable');
        input.classList.add('popup__input_error');
        return false;
    }
    submitButton.classList.remove('popup__submit_disable');
    input.classList.remove('popup__input_error');
    return input.checkValidity();
}

function isValidField(input) {
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    isValid(input);
    errorSpan.textContent = input.validationMessage;
}

function handleValidateInput(evt) {
    const currentForm = evt.currentTarget;
    const submitButton = currentForm.querySelector('.popup__submit');
    isValidField(evt.target);
}

function checkValidity(evt) {
    const currentForm = evt.target;
    if (currentForm.checkValidity()) {
        console.log('Форма успешно отправлена')
    } else {
        console.log('Что-то пошло не так');
    }
    return currentForm.checkValidity();
}

//formAddItem.addEventListener('submit', sendForms);
formAddItem.addEventListener('input', handleValidateInput);

//formUser.addEventListener('submit', sendForms);
formUser.addEventListener('input', handleValidateInput);