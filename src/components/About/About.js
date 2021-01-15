import React from 'react';
import author from '../../images/author.png';

function About() {
    return (
      <section className="about">
           <img className="about__avatar" src={author} alt="Фото автора" />
           <div className="about__info-container">
                <h2 className="about__heading">Об авторе</h2>
                <p className="about__text">Это&nbsp;блок с&nbsp;описанием автора проекта. Здесь следует указать, как вас зовут, чем вы&nbsp;занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about__text">Также можно рассказать о&nbsp;процессе обучения в&nbsp;Практикуме, чему вы&nbsp;тут научились, и&nbsp;чем можете помочь потенциальным заказчикам.</p>
           </div>
      </section>
    );
  }
  
  export default About;