import React from 'react';
import '../css/burger.css';

const Burger = ({ burgerActive }) => {
    // Appliquer la classe en fonction de burgerActive
    const burgerClass = burgerActive ? 'listeBurger show' : 'listeBurger';

    return (
        <ul className={burgerClass}>
            <li className='li__burger'><a href='#top'>Accueil</a></li>
            <li className='li__burger'><a href='#propos'>A propos</a></li>
            <li className='li__burger'><a href='#projets'>Projets</a></li>
            <li className='li__burger'><a href='#contact'>Contact</a></li>
        </ul>
    );
}

export default Burger;
