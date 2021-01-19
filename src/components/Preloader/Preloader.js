import React from 'react';

function Preloader(props) {
    return (
        <section className={props.isPreloaderShown ? "preloader" : "preloader_disabled"}>
            <i className="preloader__circle"></i>
            <p className="preloader__info">Идет поиск новостей...</p>
        </section>
    );
}

export default Preloader;