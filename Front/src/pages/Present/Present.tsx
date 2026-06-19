import styles from './Present.module.css'

import TextPressure from '../../components/ReactBits/TextPressure/TextPressure';
import LogoLoop from '../../components/ReactBits/LogoLoop/LogoLoop';

import { stackLogos } from '../../constants/stack';

const Present = () => {

    const logos = stackLogos.map(item => ({
        node: <item.node />,
        title: item.title
    }));

    return <div className={styles.presentContainer} id='home'>

        <section className={styles.leftContainer}>

            <div className={styles.textContainer}>
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

                <span>Software Developer & AI Enthusiast</span>
                <button type="button">Go!</button>


            </div>
        </section >

        <section className={styles.rightContainer}>

            <img
                src="img/imgPresent.webp"
                alt="Mauro"
            />

        </section>


    </div >
}

export default Present