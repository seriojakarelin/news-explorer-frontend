import React from 'react';
import { useLocation } from "react-router-dom";
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    const location = useLocation();

    return (
      <section className={props.isCardListShown ? "news-card-list" : "news-card-list_disabled"}>
            <h2 className="news-card-list__heading" style={{ display: `${location.pathname === '/saved-news' ? 'none' : ''}` }}>Результаты поиска</h2>
            <ul class="news-card-list__list">
                <NewsCard 
                    loggedIn={props.loggedIn}
                />
                <NewsCard 
                    loggedIn={props.loggedIn}
                />
                <NewsCard 
                    loggedIn={props.loggedIn}
                />
                <NewsCard 
                    loggedIn={props.loggedIn}
                />
            </ul>
            <button className="news-card-list__plus-button" type="button" style={{ display: `${location.pathname === '/saved-news' ? 'none' : ''}` }}>Показать ещё</button>
      </section>
    );
  }
  
  export default NewsCardList;