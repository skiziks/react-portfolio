import React, { useEffect, useState } from 'react';

// CSS
import '../css/btt.css';

// assets
import bttFleche from '../assets/btt.svg';

const Btt = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const showLimit = 2000;

            if (currentScroll > showLimit && !isVisible) {
                setIsVisible(true);
            } else if (currentScroll <= showLimit && isVisible) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <figure
            id='btt'
            className={`figure__btt ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <a href='#top' className='btt'>
                <img className='img__btt' src={bttFleche} alt='Back to top' />
            </a>
        </figure>
    );
}

export default Btt;
