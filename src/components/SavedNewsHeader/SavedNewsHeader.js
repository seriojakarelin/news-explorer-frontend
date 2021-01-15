import React from 'react';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader(props) {
    return (
        <>
            <header className="app-header app-header_theme_white">
                <div className="app-header__logo app-header__logo_theme_white">News Explorer</div>
                <Navigation 
                    loggedIn={props.loggedIn}
                    menuIsOpened={props.menuIsOpened}
                    handlePopupLoginOpen={props.handlePopupLoginOpen}
                />
                {props.menuIsOpened || props.isPopupOpened
                ?
                <button type="button" className="app-header__button app-header__button_type_close-white" onClick={props.handleExitButton}></button>
                :
                <button type="button" className="app-header__button app-header__button_theme_white" onClick={props.handleMenuIsOpened}></button>
                }
            </header>
            <div className={props.menuIsOpened ? "app-header__overlay" : "app-header__overlay_invisible"}></div>
        </>
    );
  }
  
  export default SavedNewsHeader;