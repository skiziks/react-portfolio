// import React from 'react';

// CSS 
import '../css/propos.css';

// assets
import profil from '../assets/PPprofil.png';

const APropos = ({ t }) => {
    return (
        <section id='propos' className='section__propos'>
            <h2 className='effect propos__title'>{t("about.title")}</h2>
            <article>
                <img className='profil' src={profil} alt="profil" />
                <p>
                    {t("about.first-part")}
                    <br /> <br />
                    {t("about.second-part")}
                    <br />
                    {t("about.third-part")}
                    <br /> <br />
                    {t("about.fourth-part")}
                    <br />
                    {t("about.fifth-part")}
                </p>
            </article>
        </section>
    );
}

export default APropos;
