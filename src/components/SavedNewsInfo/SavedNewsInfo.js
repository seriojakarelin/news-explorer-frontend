import React from 'react';

function SavedNewsInfo() {
    return (
        <section className="saved-news-info">
            <h2 className="saved-news-info__title">Сохранённые новости</h2>
            <p className="saved-news-info__article-info">Грета, у вас 5 сохранённых статей</p>
            <p className="saved-news-info__key-words">По ключевым словам: <span className="saved-news-info__key-words_font_bold">Природа, Тайга и 2-м другим</span></p>
        </section>
    );
  }
  
  export default SavedNewsInfo;