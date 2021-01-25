import React from 'react';
import author from '../../images/author.jpg';

function About() {
    return (
      <section className="about">
           <img className="about__avatar" src={author} alt="Фото автора" />
           <div className="about__info-container">
                <h2 className="about__heading">Об авторе</h2>
                <p className="about__text">Привет, меня зовут Серёжа Карелин</p>
                <p className="about__text">В качестве итоговой работы для Yandex.Praktikum я написал веб-сервис, который поможет найти статьи на интересующую вас тему. А если вы зарегистрируетесь, то их можно буде даже сохранить</p>
           </div>
      </section>
    );
  }
  
  export default About;