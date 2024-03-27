import React, { useEffect, useState } from 'react';
import './css/App.css';

// Components
import HeroBanner from './components/heroBanner';
import Header from './components/header';
import Propos from './components/aPropos';
import Competences from './components/competences';
import Projets from './components/projets';
import Contact from './components/contact';
import Btt from './components/btt';

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './config/i18n';
import { LanguageWrapper } from './langageWrapper';

function App() {
  const [scrollDirection, setScrollDirection] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) {
        setScrollDirection('scroll-up');
      } else if (currentScroll > 0 && scrollDirection !== 'scroll-down') {
        setScrollDirection('scroll-down');
      } else if (currentScroll < 0 && scrollDirection !== 'scroll-up') {
        setScrollDirection('scroll-up');
      }
      // console.log('scrollDirection', scrollDirection);
      // console.log('currentScroll', currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageWrapper>
        <div className={`App ${scrollDirection}`}>
          <Header t={t} changeLanguage={changeLanguage} />
          <HeroBanner t={t} />
          <Propos t={t} />
          <Competences t={t} />
          <Projets t={t} />
          <Contact t={t} />
          <Btt />
        </div>
      </LanguageWrapper>
    </I18nextProvider>
  );
}

export default App;
