import React from 'react';
import { NavLink } from 'react-router-dom';
import logoutLogo from '../../images/logout.svg';
import logoutWhiteLogo from '../../images/logout_white.svg';
import { useLocation } from "react-router-dom";

function Navigation(props) {
    const location = useLocation();

    return (
        <nav className={props.menuIsOpened ? (location.pathname === '/saved-news' ? "navigation_mobile navigation_mobile_theme_white" : "navigation_mobile") : "navigation navigation_invisible"}>
            <NavLink className={location.pathname === '/saved-news' ? "navigation__link navigation__link_theme_white" : "navigation__link"} to="/" activeClassName={props.menuIsOpened ? " " : "navigation__link_active"}>Главная</NavLink>
            {
                props.loggedIn && <NavLink className={location.pathname === '/saved-news' ? "navigation__link navigation__link_theme_white" : "navigation__link"} to="/saved-news" activeClassName={props.menuIsOpened ? " " : "navigation__link_active"}>Сохранённые статьи</NavLink>
            }
            {
                props.loggedIn ? 
                    <button className={location.pathname === '/saved-news' ? "navigation__button navigation__button_theme_white" : "navigation__button"}>
                        <p className={location.pathname === '/saved-news' ? "navigation__user-name navigation__user-name_theme_white" : "navigation__user-name"}>Грета</p>
                        <img src={location.pathname === '/saved-news' ? logoutWhiteLogo : logoutLogo} alt="иконка выхода из профиля" />
                    </button>
                :
                    <button className={props.menuIsOpened ? (location.pathname === '/saved-news' ? "navigation__button navigation__button_theme_white" : "navigation__button") : "navigation__button"} onClick={props.handlePopupRegisterOpen}>Авторизоваться</button>
            }
        </nav> 
        );
  }
  
  export default Navigation;