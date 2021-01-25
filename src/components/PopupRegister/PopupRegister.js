import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import * as MainApi from '../../utils/MainApi';
import { formsValidator } from '../FormsValidator/FormsValidator';

function PopupRegister(props) {
    const [formValues, setFormValues] = React.useState({
        userEmail: "",
        userPassword: "",
        userName: ""
    });

    const [errors, setErrors] = React.useState({
        userEmailErrors: {
            required: true,
            minLength: true,
            maxLength: false,
        },
        userPasswordErrors: {
            required: true,
            minLength: true,
            maxLength: false,
        },
        userNameErrors: {
            required: true,
            minLength: true,
            maxLength: false,
        }
    });

    function emailErrors() {
        return errors.userEmailErrors.required || errors.userEmailErrors.minLength || errors.userEmailErrors.maxLength;
    }

    function passwordErrors() {
        return errors.userPasswordErrors.required || errors.userPasswordErrors.minLength || errors.userPasswordErrors.maxLength;
    }

    function nameErrors() {
        return errors.userNameErrors.required || errors.userNameErrors.minLength || errors.userNameErrors.maxLength;
    }

    function buttonState() {
        return emailErrors() || passwordErrors() || nameErrors();
    }

    function handleEmailChange(e) {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userEmailValidationResult = formsValidator.validateEmailInput(value);
        setErrors((prevState) => ({...prevState, userEmailErrors: userEmailValidationResult}));
    };

    function handlePasswordChange(e) {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userPasswordValidationResult = formsValidator.validatePasswordInput(value);
        setErrors((prevState) => ({...prevState, userPasswordErrors: userPasswordValidationResult}));
    };

    function handleNameChange(e) {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        const userNameValidationResult = formsValidator.validateNameInput(value);
        setErrors((prevState) => ({...prevState, userNameErrors: userNameValidationResult}));
    };

    function handleSubmit(e){
        e.preventDefault()

        MainApi.register(formValues.userName, formValues.userEmail, formValues.userPassword).then((res) => {
            if (res) {
                props.setIsPopupRegisterOpen(false);
                props.handlePopupInfoOpen();
            }
        })
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            isOpen={props.isOpen}
            name={props.name}
            title={props.title}
            closingPopupsByOverlay={props.closingPopupsByOverlay}
        >
            <>
                <label className="popup__label">
                    <p className="popup__input-name">Email</p>
                    <input className="popup__input" type="email" name="userEmail" value={formValues.userEmail} onChange={handleEmailChange} placeholder="Введите почту" />
                    {
                        emailErrors() && <span className={formValues.userEmail.length === 0 ? 'popup__error_invisible' : 'popup__error'}>Неправильно введён email</span>
                    }
                </label>
                <label className="popup__label">
                    <p className="popup__input-name">Пароль</p>
                    <input className="popup__input" type="password" name="userPassword" value={formValues.userPassword} onChange={handlePasswordChange} placeholder="Введите пароль" />
                    {
                        passwordErrors() && <span className={formValues.userPassword.length === 0 ? 'popup__error_invisible' : 'popup__error'}>Неправильно введён пароль</span>
                    }
                </label>
                <label className="popup__label">
                    <p className="popup__input-name">Имя</p>
                    <input className="popup__input" type="text" name="userName" value={formValues.userName} onChange={handleNameChange} placeholder="Введите имя" />
                    {
                        nameErrors() && <span className={formValues.userName.length === 0 ? 'popup__error_invisible' : 'popup__error'}>Неправильно введено имя</span>
                    }
                </label>
                <button className={buttonState() ? "popup__button popup__button_blocked" : "popup__button"} disabled={buttonState() ? true : false} onClick={handleSubmit}>Зарегистрироваться</button>
                <p className="popup__text">или <span className="popup__link" onClick={props.changeRegisterToLogin}>Войти</span></p>
            </>
        </PopupWithForm>
    );
}

export default PopupRegister;