import React from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext';

function SavedNewsInfo(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="saved-news-info">
            <h2 className="saved-news-info__title">Сохранённые новости</h2>
            <p className="saved-news-info__article-info">{currentUser.name}, у вас {props.savedArticles.length} сохранённых статей</p>
            <p className="saved-news-info__key-words">По ключевым словам: <span className="saved-news-info__key-words_font_bold">Природа, Тайга и 2-м другим</span></p>
        </section>
    );
  }
  
  export default SavedNewsInfo;