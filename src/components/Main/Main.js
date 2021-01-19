import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <section className="main">
        <NewsCardList 
            loggedIn={props.loggedIn}
            isCardListShown={props.isCardListShown}
        />
        <Preloader 
            isPreloaderShown={props.isPreloaderShown}
        />
        <NotFound 
            isNotFoundShown={props.isNotFoundShown}
        />
        <Switch>
            <Route exact path="/">
                <About />
            </Route>
        </Switch>
    </section>
  );
}

export default Main;