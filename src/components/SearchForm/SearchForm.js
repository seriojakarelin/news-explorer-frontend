import React from 'react';
import * as NewsApi from '../../utils/NewsApi';

function SearchForm(props) {

  const [isSearchFormValid, setSearchFormValid] = React.useState(false);
  const [isErrorShown, setErrorShown] = React.useState(false);

  function checkValidity(inputValue) {
    if (inputValue.validity.valueMissing) {
      setErrorShown(true);
    } else {
      setSearchFormValid(true);
      setErrorShown(false);
    }
  };

  function handleChange(e) {
    props.setSearchValue(e.target.value );
    checkValidity(e.target);
  };

  function getArticles() {
    const today = new Date().toISOString();
    const sevenDaysPeriod = new Date((Date.now() - 604800000)).toISOString();
    props.setIsPreloaderShown(true);
    return NewsApi.getNews(props.searchValue, today, sevenDaysPeriod)
    .then((res) => {
      if (res.articles.length !== 0) {
        props.setIsPreloaderShown(false);
        props.setIsNotFoundShown(false);
        props.setIsCardListShown(true);
        localStorage.setItem('articles', JSON.stringify(res.articles));
        props.displayArticles(localStorage.getItem('articles'));
      }
      if (res.articles.length === 0) {
        localStorage.setItem('articles', JSON.stringify(res.articles));
        props.setIsPreloaderShown(false);
        props.setIsCardListShown(false);
        props.setIsNotFoundShown(true);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('search-value', props.searchValue);
    getArticles();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете</p>
        <div className="search-form__search-line">
            <input className="search-form__input" placeholder="Введите тему новости" type="text" onChange={handleChange} value={props.searchValue} required></input>
            <button className="search-form__submit-button" type="submit" disabled={isSearchFormValid ? false : true} onClick={handleSubmit}>Искать</button>
        </div>
        <span className={isErrorShown ? 'search-form__error' : 'search-form__error search-form__error_hidden'}>Нужно ввести ключевое слово</span>
    </form>
  );
}
  
export default SearchForm;