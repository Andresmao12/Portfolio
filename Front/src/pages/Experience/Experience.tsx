import styles from './Experience.module.css';

import Threads from '../../components/ReactBits/ThreadsBackground/Threads';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import Header from '../../components/Header/Header';

// import { experiences } from '../../constants/experience';
import { useTranslation } from 'react-i18next';

import type { ExperienceItem } from '../../constants/experience';

const Experience = () => {

    const { t } = useTranslation();

    const experiences = t('experience.items', {
        returnObjects: true
    }) as ExperienceItem[];

    const sortedExperiences = [...experiences].sort((a, b) => {

        // Prioritize current experiences
        if (a.current && !b.current) return 1;
        if (!a.current && b.current) return -1;

        // Sort by year in descending order
        return Number(a.year) - Number(b.year);
    });


    return (
        <section id="experience" className={styles.experienceContainer}>

            <Header center>

                <span>{t('experience.badge')}</span>
                <h2>{t('experience.title')}</h2>
                <p>{t('experience.description')}</p>

            </Header>

            <div className={styles.timelineContainer}>

                {sortedExperiences.map((experience: ExperienceItem, index: number) => (
                    <ExperienceCard
                        key={index}
                        year={experience.year}
                        company={experience.company}
                        title={experience.title}
                        description={experience.description}
                        skills={experience.skills}
                    />
                ))}

                <div className={styles.backgroundContainer} aria-hidden>
                    <Threads amplitude={1} distance={0} />
                </div>

            </div>


        </section >
    );
};

export default Experience;