import styles from './LanguageToggle.module.css'

import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {

    const { i18n } = useTranslation();

    const changeLanguage = () => {

        const newLang =
            i18n.language === 'en'
                ? 'es'
                : 'en';

        i18n.changeLanguage(newLang);

        localStorage.setItem('language', newLang);
    };

    return (
        <button onClick={changeLanguage} className={styles.button}>
            {i18n.language.toUpperCase()}
        </button>
    );
};

export default LanguageToggle;