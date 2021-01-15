import React from 'react';

function NotFound(props) {
    return (
        <section className={props.isNotFoundShown ? "not-found" : "not-found_disabled"}>
            <div className="not-found__picture"></div>
            <h2 className="not-found__title">Ничего не найдено</h2>
            <p className="not-found__text">К сожалению, по вашему запросу ничего не найдено</p>
        </section>
    );
}

export default NotFound;