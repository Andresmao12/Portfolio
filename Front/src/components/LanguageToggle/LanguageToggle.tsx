import styles from './LanguageToggle.module.css'

import { MdLanguage } from "react-icons/md";
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
            <span className={styles.desktop}>
                {i18n.language.toUpperCase()}
                <MdLanguage />
            </span>

            <span className={styles.mobile}>
                {i18n.language === 'en'
                    ? 'Español'
                    : 'English'}
                <MdLanguage />
            </span>
        </button>
    );
};

export default LanguageToggle;