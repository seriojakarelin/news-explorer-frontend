import React from 'react';
import { NavLink } from 'react-router-dom';
import gitlogo from '../../images/gitlogo.svg';
import fblogo from '../../images/fblogo.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021.Serioja Karelin, Powered by News API</p>
            <div className="footer__links">
                <nav className="footer__menu-links">
                    <NavLink className="footer__menu-link" to='/'>Главная</NavLink>
                    <a className="footer__menu-link" target="__blank" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
                </nav>
                <ul className="footer__social-links">
                    <li className="footer__social-link">
                        <a href="https://github.com/seriojakarelin" target="__blank">
                            <img className="footer__social-icon" src={gitlogo} alt="лого github" />
                        </a>
                    </li>
                    <li className="footer__social-link">
                        <a href="https://www.facebook.com/sergey.karelin.58" target="__blank">
                            <img className="footer__social-icon" src={fblogo} alt="лого facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default Footer;