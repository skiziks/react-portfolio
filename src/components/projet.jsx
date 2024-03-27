import React from 'react';
import '../css/projet.css';
import iconLien from "../assets/icons/iconLien.svg";

const Projet = ({ projet, sensImg, sensDescription, sensShadow }) => {
    const imageStyle = {};
    const descriptionStyle = {};
    const imageShadow = {};

    if (sensImg === 'left') {
        imageStyle.left = 0;
    } else if (sensImg === 'right') {
        imageStyle.right = 0;
    }

    if (sensDescription === 'left') {
        descriptionStyle.left = 0;
    } else if (sensDescription === 'right') {
        descriptionStyle.right = 0;
    }

    if (sensShadow === '-8px') {
        imageShadow.boxShadow = `${sensShadow} 10px 30px -15px white`;
    } else if (sensShadow === '8px') {
        imageShadow.boxShadow = `${sensShadow} 10px 30px -15px white`;
    }

    return (
        <div className='project__container'>
            <figure style={{ ...imageStyle, ...imageShadow }} className='project__image'>
                <img src={projet.image} alt={projet.titre} />
            </figure>
            <aside style={descriptionStyle} className='project__items'>
                <div className='project__title_link'>
                    <h3>{projet.titre}</h3>
                    {projet.lien ? (
                        <a href={projet.lien} target='_blank' rel='noreferrer'>
                            <img className='imageLink' src={iconLien} alt="lien du projet" />
                        </a>
                    ) : null}
                </div>
                <p className='project__description'>{projet.description}</p>
                {projet.pourquoi && (
                    <div>
                        <p className='project__why'>{projet.pourquoi}</p>
                    </div>
                )}
                <ul className='project__techs'>
                    {projet.techs.map((tech, index) => (
                        <li key={index}><img src={`techs/${tech}.svg`} alt={tech} /></li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};



export default Projet;
