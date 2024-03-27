import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

export const LanguageWrapper = ({ children }) => {
    const { i18n } = useTranslation();

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <I18nextProvider i18n={i18n}>
            {React.cloneElement(children, { i18n, changeLanguage })}
        </I18nextProvider>
    );
};
