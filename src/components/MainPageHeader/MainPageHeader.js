import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchForm from '../SearchForm/SearchForm';
import SavedNewsInfo from '../SavedNewsInfo/SavedNewsInfo';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { Route, Switch } from 'react-router-dom';

function MainPageHeader(props) {
    const [menuIsOpened, setMenuIsOpened] = React.useState(false);
    const isPopupOpened = props.isPopupLoginOpen === true || props.isPopupRegisterOpen === true || props.isPopupInfoOpen === true;

    function handleMenuIsOpened() {
      setMenuIsOpened(!menuIsOpened);
    }

    function handleExitButton() {
      setMenuIsOpened(false);
      props.closeAllPopups();
    }

    return (
      <section className="main-header">
        <Switch>
          <Route exact path='/'>
            <AppHeader 
              loggedIn={props.loggedIn}
              menuIsOpened={menuIsOpened}
              isPopupOpened={isPopupOpened}
              handleExitButton={handleExitButton}
              handleMenuIsOpened={handleMenuIsOpened}
              handlePopupLoginOpen={props.handlePopupLoginOpen}
            />
            <SearchForm />
          </Route>
          <Route path='/saved-news'>
            <SavedNewsHeader 
              loggedIn={props.loggedIn}
              handleMenuIsOpened={handleMenuIsOpened}
              menuIsOpened={menuIsOpened}
              handleExitButton={handleExitButton}
              isPopupOpened={isPopupOpened}
              handlePopupLoginOpen={props.handlePopupLoginOpen}
            />
            <SavedNewsInfo />
          </Route>
        </Switch>
      </section>
    );
  }
  
  export default MainPageHeader;