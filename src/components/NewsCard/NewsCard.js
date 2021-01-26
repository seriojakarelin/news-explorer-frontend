import React from 'react';
import { useLocation } from "react-router-dom";
import * as MainApi from '../../utils/MainApi';
import { months } from '../../utils/constants';
import {CurrentUserContext} from '../../context/CurrentUserContext';

function NewsCard(props) {

    const location = useLocation();
    const currentUser = React.useContext(CurrentUserContext);
    const [saveButtonClicked, setSaveButtonClicked] = React.useState(false);

    function handleSaveArticle(savedArticle) {
        MainApi.saveArticle(savedArticle)
        .then((res) => {
            props.setSavedArticles([res, ...props.savedArticles]);
        })
        .catch((err) => {
            console.log(err);
        })
      }

    function handleIsSaveButtonClicked() {
        if (saveButtonClicked === true) {
            setSaveButtonClicked(false);
        }
        if (saveButtonClicked === false) {
            setSaveButtonClicked(true);
            handleSaveArticle({
                link: props.link,
                image: props.image,
                date: props.date,
                title: props.title,
                text: props.description,
                source: props.source,
                keyword: props.searchValue,
                owner: currentUser._id,
            })
        }
    }

    function handleArticleDelete() {
        MainApi.deleteArticle(props.id)
        .then((res) => {
            const newArticles = props.savedArticles.filter((item) => item._id !== props.id);
            props.setSavedArticles(newArticles);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function convertingDate(item) {
        const date = new Date(item);
        const dateToRender = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
        return dateToRender
    }

    return (
        <li className="news-card">
            {location.pathname === '/saved-news'
            ?
            <button 
                type="button" 
                className="news-card__trash-button"
                onClick={handleArticleDelete}>
            </button>
            :
            <button 
                type="button" 
                onClick={handleIsSaveButtonClicked}
                className={props.loggedIn ? (saveButtonClicked ? "news-card__save-button_marked" : "news-card__save-button news-card__save-button_type_login") : "news-card__save-button"}>
            </button>
            }
            {location.pathname === '/saved-news' && <div className="news-card__keyword">{props.keyword}</div>}
            <a className="news-card__link" href={props.link} target="__blank">
                <img className="news-card__picture" src={props.image} alt="фото статьи" />
                <div className="news-card__caption">
                    <p className="news-card__date">{convertingDate(props.date)}</p>
                    <h2 className="news-card__title">{props.title}</h2>
                    <p className="news-card__text">{props.description}</p>
                    <p className="news-card__source">{props.source}</p>
                </div>
            </a>
        </li>
    );
}

export default NewsCard;