import React from 'react';

function SearchForm() {
    return (
      <form className="search-form">
          <h1 className="search-form__title">Что творится в мире?</h1>
          <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете</p>
          <div className="search-form__search-line">
              <input className="search-form__input" placeholder="Введите тему новости" type="text"></input>
              <button className="search-form__submit-button" type="button">Искать</button>
          </div>
      </form>
    );
  }
  
  export default SearchForm;