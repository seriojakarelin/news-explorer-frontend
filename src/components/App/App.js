import React from 'react';
import MainPageHeader from '../MainPageHeader/MainPageHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupInfo from '../PopupInfo/PopupInfo';

function App() {
  const [loggedIn, setIsLoggedIn] = React.useState(false);
  const [signedUp, setIsSignedUp] = React.useState(false);
  const [isCardListShown, setIsCardListShown] = React.useState(true);
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);
  const [isNotFoundShown, setIsNotFoundShown] = React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = React.useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    });
  }, [closeAllPopups]);

  function handleLoggedIn() {
    setIsLoggedIn(true);
  }

  function handleIsSignedUp() {
    setIsSignedUp(true);
  }

  function handleIsCardListShown() {
    setIsCardListShown(false);
  }

  function handleIsPreloaderShown() {
    setIsPreloaderShown(true);
  }

  function handleIsNotFoundShown() {
    setIsNotFoundShown(true);
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

  return (
    <div className="page">
      <MainPageHeader 
        loggedIn={loggedIn}
        isPopupLoginOpen={isPopupLoginOpen}
        isPopupRegisterOpen={isPopupRegisterOpen}
        isPopupInfoOpen={isPopupInfoOpen}
        closeAllPopups={closeAllPopups}
        handlePopupRegisterOpen={handlePopupRegisterOpen}
      />
      <Main 
        loggedIn={loggedIn}
        isCardListShown={isCardListShown}
        isPreloaderShown={isPreloaderShown}
        isNotFoundShown={isNotFoundShown}
      />
      <Footer />
      <PopupLogin 
        isOpen={isPopupLoginOpen}
        onClose={closeAllPopups}
        name={'login'}
        title={'Вход'}
        changeLoginToRegister={changeLoginToRegister}
        closingPopupsByOverlay={closingPopupsByOverlay}
      />
      <PopupRegister 
        isOpen={isPopupRegisterOpen}
        onClose={closeAllPopups}
        name={'register'}
        title={'Регистрация'}
        changeRegisterToLogin={changeRegisterToLogin}
        closingPopupsByOverlay={closingPopupsByOverlay}
        handleIsSignedUp={handleIsSignedUp}
        handlePopupInfoOpen={handlePopupInfoOpen}
      />
      <PopupInfo 
        isOpen={isPopupInfoOpen}
        onClose={closeAllPopups}
        closingPopupsByOverlay={closingPopupsByOverlay}
        handlePopupLoginOpen={handlePopupLoginOpen}
      />
    </div>
  );
}

export default App;
