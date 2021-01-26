import React from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import {getExpression, getString} from '../../utils/sort';

function SavedNewsInfo(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const expression = getExpression(props.savedArticles);
    const articleString = getString(props.savedArticles);

    return (
        <section className="saved-news-info">
            <h2 className="saved-news-info__title">Сохранённые новости</h2>
            <p className="saved-news-info__article-info">{currentUser.name}, {articleString}</p>
            <p className="saved-news-info__key-words">По ключевым словам: <span className="saved-news-info__key-words_font_bold">{expression}</span></p>
        </section>
    );
}

export default SavedNewsInfo;