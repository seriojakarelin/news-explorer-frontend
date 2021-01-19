import React from 'react';
import Navigation from '../Navigation/Navigation';

function AppHeader(props) {
    return (
      <>
        <header className={props.menuIsOpened ? "app-header app-header_theme_dark" : "app-header"}>
            <div className="app-header__logo">News Explorer</div>
            <Navigation 
              loggedIn={props.loggedIn}
              menuIsOpened={props.menuIsOpened}
              handlePopupLoginOpen={props.handlePopupLoginOpen}
            />
            {props.menuIsOpened || props.isPopupOpened
            ?
            <button type="button" className="app-header__button app-header__button_type_close" onClick={props.handleExitButton}></button>
            :
            <button type="button" className="app-header__button" onClick={props.handleMenuIsOpened}></button>
            }
        </header>
        <div className={props.menuIsOpened ? "app-header__overlay" : "app-header__overlay_invisible"}></div>
      </>
    );
  }
  
  export default AppHeader;