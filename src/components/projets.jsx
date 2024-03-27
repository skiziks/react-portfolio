import React, { useState } from 'react';
import Projet from './projet';

// CSS
import '../css/projets.css';

const Projets = ({ t }) => {
    const projets = [
        {
            id: 1,
            titre: t("listProjects.MMIAPP.title"),
            description: t("listProjects.MMIAPP.description"),
            pourquoi: t("listProjects.MMIAPP.pourquoi"),
            image: 'images/mmiapp.png',
            techs: ['html', 'css', 'js', 'php', 'mysql'],
            categorie: 'web'
        },
        {
            id: 2,
            titre: t("listProjects.webdoc.title"),
            description: t("listProjects.webdoc.description"),
            image: 'images/webdoc.png',
            techs: ['html', 'css', 'js'],
            lien: 'http://ayoub.kahfy.mmi-velizy.fr/Webdoc/',
            categorie: 'web'
        },
        {
            id: 3,
            titre: t("listProjects.appli_php.title"),
            description: t("listProjects.appli_php.description"),
            image: 'images/sitePHP.png',
            techs: ['html', 'css', 'js', 'php', 'mysql'],
            lien: 'http://sae203.nicolas.lerond.mmi-velizy.fr/index.php',
            categorie: 'web'
        },
        {
            id: 4,
            titre: t("listProjects.site_gouvernementale.title"),
            description: t("listProjects.site_gouvernementale.description"),
            image: 'images/siteGouv.png',
            techs: ['html', 'css', 'js', 'chart'],
            lien: 'https://skiziks.github.io/Hors-ligne/',
            categorie: 'web'
        },
        {
            id: 5,
            titre: t("listProjects.site_meteo.title"),
            description: t("listProjects.site_meteo.description"),
            pourquoi: t("listProjects.site_meteo.pourquoi"),
            image: 'images/meteo.png',
            techs: ['react'],
            categorie: 'web'
        },
        {
            id: 6,
            titre: t("listProjects.ffh.title"),
            description: t("listProjects.ffh.description"),
            image: 'images/ffh.jpg',
            techs: ['ue'],
            lien: 'https://drive.google.com/drive/folders/16oGLFAxHR5wTP-NOhQkafSOaxJaItZi1',
            categorie: 'jeuxApp'
        },
        {
            id: 7,
            titre: t("listProjects.nature.title"),
            description: t("listProjects.nature.description"),
            pourquoi: t("listProjects.nature.pourquoi"),
            image: 'images/nature.png',
            techs: ['androidstudio', 'kotlin'],
            categorie: 'jeuxApp'
        },
        {
            id: 8,
            titre: t("listProjects.dogscape.title"),
            description: t("listProjects.dogscape.description"),
            image: 'images/dogscape.png',
            techs: ['html', 'css', 'js'],
            lien: 'https://skiziks.github.io/DogScape/',
            categorie: 'jeuxApp'
        },
        {
            id: 9,
            titre: t("listProjects.bfa.title"),
            description: t("listProjects.bfa.description"),
            pourquoi: t("listProjects.bfa.pourquoi"),
            image: 'images/bfa.png',
            techs: ['premiere'],
            lien: 'https://youtu.be/zUJbbIL0vKQ',
            categorie: 'Audiovisuel'
        },
        {
            id: 10,
            titre: t("listProjects.docuIA.title"),
            description: t("listProjects.docuIA.description"),
            image: 'images/artificial-intelligence.jpg',
            techs: ['davinci'],
            lien: 'https://youtu.be/QCpMx-3z7D8',
            categorie: 'Audiovisuel'
        },
        {
            id: 11,
            titre: t("listProjects.fourchette.title"),
            description: t("listProjects.fourchette.description"),
            image: 'images/fourchette.png',
            techs: ['premiere'],
            lien: 'https://youtu.be/OGUs5lx01zo',
            categorie: 'Audiovisuel'
        },
        {
            id: 12,
            titre: t("listProjects.video_metier.title"),
            description: t("listProjects.video_metier.description"),
            image: 'images/video_monteur.png',
            techs: ['premiere'],
            lien: 'https://youtu.be/CnL0eDdpZuY',
            categorie: 'Audiovisuel'
        },
        {
            id: 13,
            titre: t("listProjects.blender.title"),
            description: t("listProjects.blender.description"),
            pourquoi: t("listProjects.blender.pourquoi"),
            image: 'images/blender.png',
            techs: ['blender'],
            lien: 'https://youtube.com/shorts/o2LJLUs1guA',
            categorie: 'Audiovisuel'
        },
        {
            id: 14,
            titre: t("listProjects.data.title"),
            description: t("listProjects.data.description"),
            image: 'images/data.png',
            techs: ['html', 'css', 'js', 'chart'],
            lien: 'http://nicolas.lerond.mmi-velizy.fr/cours/datavisualisation/',
            categorie: 'web'
        },
        {
            id: 15,
            titre: t("listProjects.labyrinthe.title"),
            description: t("listProjects.labyrinthe.description"),
            image: 'images/labyrinthe.png',
            techs: ['unity'],
            lien: 'https://drive.google.com/drive/folders/1UnSEwOyNGFQ_LIK6AIwdYZvp5KjFT6hQ?usp=sharing',
            categorie: 'jeuxApp'
        }
    ];


    // État pour stocker la catégorie sélectionnée, initialisez-le à 'Tous'
    const [categorieSelectionnee, setCategorieSelectionnee] = useState('Tous');
    const [boutonActif, setBoutonActif] = useState(null);

    // Fonction pour gérer le clic sur un bouton
    const handleCategorieClick = (categorie) => {
        setCategorieSelectionnee(categorie);
        setBoutonActif(categorie);
    };

    // Fonction pour vérifier si le bouton est actif
    const isBoutonActif = (categorie) => {
        return boutonActif === categorie;
    };

    // Fonction de filtrage des projets par catégorie
    const projetsFiltres = categorieSelectionnee === 'Tous' ? projets : projets.filter(projet => projet.categorie === categorieSelectionnee);

    return (
        <section id='projets' className='section__projets'>
            <h2 className='effect projets__title'>{t("projects.title")}</h2>
            <article className='container_tri_button'>
                <a href='#hr'>
                    <input
                        className={`tri_button ${isBoutonActif('Tous') ? 'active' : ''}`}
                        type='button'
                        value={t("projects.inputsFilter.all")}
                        onClick={() => handleCategorieClick('Tous')}
                    />
                </a>
                <a href='#hr'>
                    <input
                        className={`tri_button ${isBoutonActif('web') ? 'active' : ''}`}
                        type='button'
                        value={t("projects.inputsFilter.web")}
                        onClick={() => handleCategorieClick('web')}
                    />
                </a>
                <a href='#hr'>
                    <input
                        className={`tri_button ${isBoutonActif('jeuxApp') ? 'active' : ''}`}
                        type='button'
                        value={t("projects.inputsFilter.gameApp")}
                        onClick={() => handleCategorieClick('jeuxApp')}
                    />
                </a>
                <a href='#hr'>
                    <input
                        className={`tri_button ${isBoutonActif('Audiovisuel') ? 'active' : ''}`}
                        type='button'
                        value={t("projects.inputsFilter.audiovisual")}
                        onClick={() => handleCategorieClick('Audiovisuel')}
                    />
                </a>
            </article>
            <hr id='hr' />
            <article>
                {projetsFiltres.map((projet, index) => (
                    <Projet
                        key={projet.id}
                        projet={{
                            titre: projet.titre,
                            description: projet.description,
                            pourquoi: projet.pourquoi,
                            image: projet.image,
                            techs: projet.techs,
                            lien: projet.lien
                        }}
                        sensImg={index % 2 === 0 ? 'left' : 'right'}
                        sensDescription={index % 2 === 0 ? 'right' : 'left'}
                        sensShadow={index % 2 === 0 ? '-8px' : '8px'}
                    />
                ))}
            </article>
        </section>
    );
};

export default Projets;
