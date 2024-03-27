import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <h1>{t('hello')}</h1>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <p>{t('about')}</p>
            <p>{t('contact')}</p>
        </div>
    );
}

export default App;
