import React from 'react';
import MainPageHeader from '../MainPageHeader/MainPageHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupInfo from '../PopupInfo/PopupInfo';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import {articlesAmount} from '../../utils/constants';

function App() {
  const [loggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [articlesData, setArticlesData] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSavedCardListShown, setIsSavedCardListShown] = React.useState(false);
  const [isCardListShown, setIsCardListShown] = React.useState(false);
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);
  const [isNotFoundShown, setIsNotFoundShown] = React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = React.useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = React.useState(false);
  const [isLoadComplete, setIsLoadComplete] = React.useState(false);
  const [blockArticles, setBlockArticles] = React.useState([]);

  console.log(articlesData)
  console.log(savedArticles)
  console.log(loggedIn)

  React.useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    });
  }, [closeAllPopups]);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt'); 
  
      return MainApi.getUser(jwt)
      .then((res) => {
        if (res) {
          handleLoggedIn();
          setIsLoadComplete(true);
          setUserData(res);
        }
      })
    } else {
      setIsLoadComplete(true);
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt'); 

      return MainApi.getArticles(jwt)
      .then((res) => {
        if (res.length !== 0) {
          setIsSavedCardListShown(true)
          setIsNotFoundShown(false)
          setSavedArticles(res.reverse());
        }
      })
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('search-value')) {
      setSearchValue(localStorage.getItem('search-value'))
      const storageArticles = JSON.parse(localStorage.getItem('articles'))
      displayArticles(storageArticles || []);
      setIsCardListShown(true)
    }
  }, []);

  function displayArticles() {
    console.log(articlesData)
    setBlockArticles(articlesData.splice(0, articlesAmount));
    console.log(blockArticles)
    return blockArticles;
  }

  function handleLoggedIn() {
    setIsLoggedIn(true);
  }

  function handlePopupLoginOpen() {
    setIsPopupLoginOpen(true);
  }

  function handlePopupRegisterOpen() {
    setIsPopupRegisterOpen(true);
  }

  function handlePopupInfoOpen() {
    setIsPopupInfoOpen(true);
  }

  function closeAllPopups() {
    setIsPopupLoginOpen(false);
    setIsPopupRegisterOpen(false);
    setIsPopupInfoOpen(false);
  }

  function closingPopupsByOverlay(evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    } 
    closeAllPopups();
  }

  function changeRegisterToLogin() {
    closeAllPopups()
    setIsPopupLoginOpen(true)
  }

  function changeLoginToRegister() {
    closeAllPopups()
    setIsPopupRegisterOpen(true)
  }

  if (isLoadComplete) {
    return (
      <div className="page">
        <CurrentUserContext.Provider value={userData}>
          <MainPageHeader 
            setIsLoggedIn={setIsLoggedIn}
            loggedIn={loggedIn}
            isPopupLoginOpen={isPopupLoginOpen}
            isPopupRegisterOpen={isPopupRegisterOpen}
            isPopupInfoOpen={isPopupInfoOpen}
            closeAllPopups={closeAllPopups}
            handlePopupRegisterOpen={handlePopupRegisterOpen}
            setArticlesData={setArticlesData}
            setIsPreloaderShown={setIsPreloaderShown}
            setIsCardListShown={setIsCardListShown}
            setIsNotFoundShown={setIsNotFoundShown}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            savedArticles={savedArticles}
            displayArticles={displayArticles}
            articlesData={articlesData}
          />
          <Main 
            loggedIn={loggedIn}
            isCardListShown={isCardListShown}
            isPreloaderShown={isPreloaderShown}
            isNotFoundShown={isNotFoundShown}
            articlesData={articlesData}
            searchValue={searchValue}
            savedArticles={savedArticles}
            setSavedArticles={setSavedArticles}
            isSavedCardListShown={isSavedCardListShown}
            blockArticles={blockArticles}
            displayArticles={displayArticles}
          />
          <Footer />
          <PopupLogin 
            isOpen={isPopupLoginOpen}
            onClose={closeAllPopups}
            name={'login'}
            title={'Вход'}
            changeLoginToRegister={changeLoginToRegister}
            closingPopupsByOverlay={closingPopupsByOverlay}
            handleLoggedIn={handleLoggedIn}
            setIsPopupLoginOpen={setIsPopupLoginOpen}
            setUserData={setUserData}
          />
          <PopupRegister 
            isOpen={isPopupRegisterOpen}
            onClose={closeAllPopups}
            name={'register'}
            title={'Регистрация'}
            changeRegisterToLogin={changeRegisterToLogin}
            closingPopupsByOverlay={closingPopupsByOverlay}
            handlePopupInfoOpen={handlePopupInfoOpen}
            setIsPopupRegisterOpen={setIsPopupRegisterOpen}
          />
          <PopupInfo 
            isOpen={isPopupInfoOpen}
            onClose={closeAllPopups}
            closingPopupsByOverlay={closingPopupsByOverlay}
            handlePopupLoginOpen={handlePopupLoginOpen}
            setIsPopupInfoOpen={setIsPopupInfoOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    );
  } else {
    return (
      <Preloader />
    );
  }

}

export default App;
