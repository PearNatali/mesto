//Функция с вложенным объектом. Поиск всех form. 
function enableValidation({
    formSelector, ...selectors}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((form) => {
        setFormValidation(form, selectors);
    })
};
//-----------------------------------------------------------------------------------------------------------------
//Функция последовательнй проверки на валидность (последовательность). 
function setFormValidation(form, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const buttonElement = form.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
    inputList.forEach((inputElement) => { 
        inputElement.addEventListener('input', function() {
            toggleInputErrorState(form, inputElement, inputErrorClass); 
            toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
        })
    })
    form.addEventListener('submit', () => toggleButtonState(inputList, buttonElement, inactiveButtonClass));
};
//-----------------------------------------------------------------------------------------------------------------
//Функция включения валидации.
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid)
};
//-----------------------------------------------------------------------------------------------------------------
//Функция отключения/включения кнопки. 
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
        enableButton(buttonElement, inactiveButtonClass);
    } else {
        disableButton(buttonElement, inactiveButtonClass);
    }
};
//Функция активации кнопки.
function enableButton(buttonElement, inactiveButtonClass) {
    buttonElement.setAttribute('disabled', ''); 
    buttonElement.classList.add(inactiveButtonClass);
};
//Функция деактивации кнопки.
function disableButton(buttonElement, inactiveButtonClass) {
    buttonElement.removeAttribute('disabled'); 
    buttonElement.classList.remove(inactiveButtonClass);
};
//-----------------------------------------------------------------------------------------------------------------
//Функция отображения браузерных ошибок. 
const showInputError = (inputElement, errorElement, inputErrorClass, errorText) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorText;
};
//-----------------------------------------------------------------------------------------------------------------
//Функция исключения отображения ошибок. 
const hideInputError = (inputElement, errorElement, inputErrorClass) => {
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
}
//-----------------------------------------------------------------------------------------------------------------
//Функция режима лайф отображения ошибок. 
const toggleInputErrorState = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (!inputElement.validity.valid) { 
        showInputError(inputElement, errorElement, inputErrorClass, inputElement.validationMessage)
    } else {
        hideInputError(inputElement, errorElement, inputErrorClass);
    }
}
