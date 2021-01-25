import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <section className="main">
        {props.isPreloaderShown
        ?
        <Preloader 
            isPreloaderShown={props.isPreloaderShown}
        />
        :
        <NewsCardList 
            loggedIn={props.loggedIn}
            isCardListShown={props.isCardListShown}
            articlesData={props.articlesData}
            searchValue={props.searchValue}
            savedArticles={props.savedArticles}
            setSavedArticles={props.setSavedArticles}
            isSavedCardListShown={props.isSavedCardListShown}
            handleSaveArticle={props.handleSaveArticle}
            displayArticles={props.displayArticles}
        />
        }
        <Switch>
            <Route exact path="/">
                <NotFound 
                    isNotFoundShown={props.isNotFoundShown}
                />
                <About />
            </Route>
        </Switch>
    </section>
  );
}

export default Main;