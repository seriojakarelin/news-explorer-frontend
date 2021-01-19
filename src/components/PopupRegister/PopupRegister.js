import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function PopupRegister(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleUserNameChange(e) {
        setUserName(e.target.value);
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
                    <input className="popup__input" type="email" value={email} onChange={handleEmailChange} placeholder="Введите почту" required minLength="2" maxLength="30" />
                    <span className="popup__error">Неправильно введён email</span>
                </label>
                <label className="popup__label">
                    <p className="popup__input-name">Пароль</p>
                    <input className="popup__input" type="password" value={password} onChange={handlePasswordChange} placeholder="Введите пароль" required minLength="2" maxLength="30" />
                    <span className="popup__error">Неправильно введён пароля</span>
                </label>
                <label className="popup__label">
                    <p className="popup__input-name">Имя</p>
                    <input className="popup__input" type="text" value={userName} onChange={handleUserNameChange} placeholder="Введите имя" required minLength="2" maxLength="30" />
                    <span className="popup__error">Неправильно введено имя</span>
                </label>
                <button className="popup__button popup__button_type_login popup__button_blocked">Зарегистрироваться</button>
                <p className="popup__text">или <span className="popup__link" onClick={props.changeRegisterToLogin}>Войти</span></p>
            </>
        </PopupWithForm>
    );
}

export default PopupRegister;