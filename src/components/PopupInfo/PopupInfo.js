import React from 'react';

function PopupInfo(props) {
    return (
      <section className={props.isOpen ? 'popup popup_type_info popup_opened' : 'popup popup_type_info'} onClick={props.closingPopupsByOverlay}>
        <div  className='popup__container popup__container_type_info'>
          <h2 className="popup__title popup__title_type_info">Пользователь успешно зарегистрирован!</h2>
          <div onClick={props.onClose} className="popup__close-button"></div>
          <span onClick={props.onClose} className="popup__link">Войти</span>
        </div>
      </section>
    )
  }
  
  export default PopupInfo;