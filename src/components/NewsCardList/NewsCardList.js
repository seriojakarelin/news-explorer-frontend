import React from 'react';
import { useLocation } from "react-router-dom";
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    const location = useLocation();

    return (
      <>  
        {location.pathname === '/saved-news'
        ?
        <section className={props.isSavedCardListShown ? "news-card-list" : "news-card-list_disabled"}>
                <ul className="news-card-list__list">
                    {props.savedArticles.map((article) => 
                        <NewsCard 
                            id={article._id}
                            key={article.url}
                            link={article.link}
                            title={article.title}
                            description={article.text}
                            image={article.image}
                            source={article.source}
                            date={article.date}
                            loggedIn={props.loggedIn}
                            searchValue={props.searchValue}
                            keyword={article.keyword}
                            setSavedArticles={props.setSavedArticles}
                            savedArticles={props.savedArticles}
                        />
                    )}
                </ul>
        </section>  
        :
        <section className={props.isCardListShown ? "news-card-list" : "news-card-list_disabled"}>
                <h2 className="news-card-list__heading">Результаты поиска</h2>
                    <ul className="news-card-list__list">
                        {props.articlesData.map((article) => 
                            <NewsCard 
                                key={article.url}
                                link={article.url}
                                title={article.title}
                                description={article.description}
                                image={article.urlToImage}
                                source={article.source.name}
                                date={article.publishedAt}
                                loggedIn={props.loggedIn}
                                searchValue={props.searchValue}
                                setSavedArticles={props.setSavedArticles}
                                savedArticles={props.savedArticles}
                            />
                        )}
                    </ul>
                <button className="news-card-list__plus-button" type="button" style={{ display: `${location.pathname === '/saved-news' ? 'none' : ''}` }}>Показать ещё</button>
        </section>
        }
      </>  
    );
}
  
  export default NewsCardList;