import styles from './About.module.css';

import Header from '../../components/Header/Header';

import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();

    return (
        <section id='about' className={styles.aboutSection}>

            <Header ClassName={styles.header}>
                <span className={styles.badge}>{t('about.badge')}</span>
                <h2>{t('about.title')}</h2>
                <p className={styles.lead}>{t('about.lead')}</p>
            </Header>

            <div className={styles.storyContainer}>

                <div className={styles.storyText}>

                    <h3>{t('about.storyTitle')}</h3>

                    <p>{t('about.story1')}</p>
                    <p>{t('about.story2')}</p>
                    <p>{t('about.story3')}</p>

                </div>

                <div className={styles.profileContainer}>
                    <img src="/img/About.webp" alt="Mauro working" />
                </div>

            </div>

            <div className={styles.servicesPreview}>

                <h3>{t('about.servicesTitle')}</h3>

                <div className={styles.servicesGrid}>

                    <div>✓ {t('about.services.mvp')}</div>
                    <div>✓ {t('about.services.web')}</div>
                    <div>✓ {t('about.services.automation')}</div>
                    <div>✓ {t('about.services.ai')}</div>
                    <div>✓ {t('about.services.internal')}</div>
                    <div>✓ {t('about.services.analytics')}</div>

                </div>

            </div>
            <div className={styles.valuesSection}>

                <div>
                    <strong>01</strong>
                    <h3>{t('about.values.businessFocus.title')}</h3>
                    <p>{t('about.values.businessFocus.description')}</p>
                </div>

                <div>
                    <strong>02</strong>
                    <h3>{t('about.values.realism.title')}</h3>
                    <p>{t('about.values.realism.description')}</p>
                </div>

                <div>
                    <strong>03</strong>
                    <h3>{t('about.values.partnership.title')}</h3>
                    <p>{t('about.values.partnership.description')}</p>
                </div>

            </div>

        </section>
    );
};

export default About;