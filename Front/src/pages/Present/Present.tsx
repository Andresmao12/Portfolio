import styles from './Present.module.css'

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TextPressure from '../../components/ReactBits/TextPressure/TextPressure';
import LogoLoop from '../../components/ReactBits/LogoLoop/LogoLoop';

import { stackLogos } from '../../constants/stack';

const Present = () => {

    const { t } = useTranslation()

    const logos = stackLogos.map(item => ({
        node: <item.node />,
        title: item.title
    }));

    const [showEffects, setShowEffects] = useState(false);

    useEffect(() => {

        if ("requestIdleCallback" in window) {

            const id = requestIdleCallback(() => {
                setShowEffects(true);
            });

            return () => cancelIdleCallback(id);
        }

        const timeout = setTimeout(() => {
            setShowEffects(true);
        }, 200);

        return () => clearTimeout(timeout);

    }, []);


    return <div className={styles.presentContainer} id='home'>

        <section className={styles.leftContainer}>

            <div className={styles.textContainer}>
                {showEffects && (
                    <LogoLoop
                        logos={logos}
                        speed={100}
                        direction="left"
                        logoHeight={20}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        ariaLabel="Technology partners"
                    />
                )}
                {showEffects ? (
                    <TextPressure
                        text="Mauro Dev"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic
                        textColor="var(--text)"
                        strokeColor="#5227FF"
                        minFontSize={36}
                    />
                ) : (
                    <h1 className={styles.title}>Mauro Dev</h1>
                )}  

                <span>{t('home.phrase')}</span>
                <a href="#clients" className={styles.button}>
                    {t('home.button')}
                </a>

            </div>
        </section >

        <section className={styles.rightContainer}>
            <img src="img/present.webp" alt="Mauro" fetchPriority="high" decoding="async" />
        </section>


    </div >
}

export default Present