import React from 'react';

// assets
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';

// CSS
import '../css/contact.css';

const Contact = ({ t }) => {
    return (
        <footer id='contact' className='footer__contacts'>
            <aside className='aside__contacts'>
                <h3 className='contacts__h3'>{t("contact.title")}</h3>
                <h4 className='contacts__h4'><strong>{t("contact.subtitle")}</strong></h4>
            </aside>
            <aside className='aside__links'>
                <a href="https://github.com/skiziks"><img className='contacts__images' src={github} alt="github" /></a>
                <a href="http://www.linkedin.com/in/nicolas-lerond"><img className='contacts__images' src={linkedin} alt="linkedin" /></a>
                <a href="mailto:lerond.nicolas@gmail.com"><img className='contacts__images' src={mail} alt="mail" /></a>
            </aside>
            <p>{t("footer.text")}</p>
        </footer>
    );
}

export default Contact;
