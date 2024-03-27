// import React from 'react';
import { useState, useEffect } from 'react';

// styles
import '../css/heroBanner.css';

// components

// assets
import souris from '../assets/sourisHeroBanner.svg';
import fleches from '../assets/flechesHeroBanner.svg';

const HeroBanner = ({ t }) => {

    const [metier, setMetier] = useState('Full-stack');
    useEffect(() => {
        const interval = setInterval(() => {
            setMetier((prevMetier) => prevMetier === 'Full-stack' ? 'Back-end' : 'Full-stack');
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section id='top' className="hero-banner">
            <div className='hero-banner__div_title'>
                <h1 className='hero-banner__title'>
                    Nicolas Lerond
                    <br></br>{t("hero.job")} <span className='metier'>{metier}</span>
                </h1>

                <article className='hero-banner__article'>
                    <a className='CV' href={process.env.PUBLIC_URL + "/CV_Alternance.pdf"} download="CV_Alternance.pdf">
                        {t("hero.CV")}
                    </a>

                    <a className='contact' href="mailto:lerond.nicolas@gmail.com">{t("hero.contact")}</a>
                </article>
            </div>
            <aside className='hero-banner__aside'>
                <img className='suiteHeroBanner souris__heroBanner' src={souris} alt="suite du site" />
                <img className='suiteHeroBanner fleches__heroBanner' src={fleches} alt="suite du site" />
            </aside>
        </section>
    );
}

export default HeroBanner;
