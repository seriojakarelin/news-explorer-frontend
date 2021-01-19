import React from 'react';
import newspic from '../../images/newspic.png';
import { useLocation } from "react-router-dom";

function NewsCard(props) {

    const location = useLocation();
    const [saveButtonClicked, setSaveButtonClicked] = React.useState(false);

    function handleIsSaveButtonClicked() {
        setSaveButtonClicked(!saveButtonClicked);
    }

    return (
        <li className="news-card">
            {location.pathname === '/saved-news'
            ?
            <button 
                type="button" 
                className="news-card__trash-button">
            </button>
            :
            <button 
                type="button" 
                onClick={handleIsSaveButtonClicked}
                className={props.loggedIn ? (saveButtonClicked ? "news-card__save-button_marked" : "news-card__save-button news-card__save-button_type_login") : "news-card__save-button"}>
            </button>
            }
            <img className="news-card__picture" src={newspic} alt="фото статьи" />
            <div className="news-card__caption">
                <p className="news-card__date">2 августа, 2019</p>
                <h2 className="news-card__title">Национальное достояние – парки</h2>
                <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – 
                    охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                </p>
                <p className="news-card__source">Лента.ру</p>
            </div>
        </li>
    );
}

export default NewsCard;