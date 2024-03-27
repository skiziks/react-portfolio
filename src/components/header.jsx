import React, { useState, useEffect } from 'react';
import '../css/header.css';
import { useTranslation } from 'react-i18next';
import nl from '../assets/NL.svg';

const Header = ({ t }) => {
    const [burgerActive, setBurgerActive] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [language, setLanguage] = useState('fr');
    const burgerClass = burgerActive ? 'listeBurger show' : 'listeBurger';
    const [langueIsActive, setLangueIsActive] = useState(false);

    const { i18n } = useTranslation();

    useEffect(() => {
        // Au chargement du composant, initialiser la langue à 'fr'
        setLanguage('fr');
        changeLanguage('fr');
    }, []);

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    function switchLanguage() {
        const newLanguage = language === 'en' ? 'fr' : 'en';
        setLanguage(newLanguage);
        changeLanguage(newLanguage);
        switchEtatLanguage();
    }

    const handleBurger = () => {
        setBurgerActive(!burgerActive);
        setCheckboxChecked(!checkboxChecked);
    }

    const switchEtatLanguage = () => {
        setLangueIsActive(!langueIsActive);
    };

    return (
        <header>
            <div className='header'>
                <img className='logo' src={nl} alt="logo" />
                <ul className='listeHeader'>
                    <li><a href='#top'>{t('header.home')}</a></li>
                    <li><a href='#propos'>{t('header.about')}</a></li>
                    <li><a href='#projets'>{t('header.projects')}</a></li>
                    <li><a href='#contact'>{t('header.contact')}</a></li>
                </ul>
                <div className='burger'>
                    <input type="checkbox" id="checkbox" checked={checkboxChecked} onChange={() => { }} />
                    <label htmlFor="checkbox" className="toggle" onClick={handleBurger}>
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>

                <div id='languageInputDesktop' className={langueIsActive ? 'language InputlanguageActive' : 'language'}>
                    <input id='toggleLanguage' type='button' onClick={switchLanguage} />
                    <label htmlFor="toggleLanguage"><span className={langueIsActive ? 'white' : 'black'}>FR</span> | <span className={langueIsActive ? 'black' : 'white'}>EN</span></label>
                </div>
                {/* <div className='language languageActive'>
                    <input
                        type="checkbox"
                        id="toggleLanguage"
                        checked={language === 'fr'}
                        onChange={switchLanguage}
                    />
                    <label htmlFor="toggleLanguage"></label>
                </div> */}
            </div>
            <ul id='burger__links' className={burgerClass}>
                <li className='li__burger'><a onClick={handleBurger} href='#propos'>{t('header.about')}</a></li>
                <li className='li__burger'><a onClick={handleBurger} href='#projets'>{t('header.projects')}</a></li>
                <li className='li__burger'><a onClick={handleBurger} href='#contact'>{t('header.contact')}</a></li>

                <div id='languageInputMobile' className={langueIsActive ? 'language InputlanguageActive' : 'language'}>
                    <input id='toggleLanguage' type='button' onClick={switchLanguage} />
                    <label htmlFor="toggleLanguage"><span className={langueIsActive ? 'white' : 'black'}>FR</span> | <span className={langueIsActive ? 'black' : 'white'}>EN</span></label>
                </div>
            </ul>
        </header>
    );
}

export default Header;
