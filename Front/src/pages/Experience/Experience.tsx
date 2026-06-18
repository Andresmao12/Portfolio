import styles from './Experience.module.css';

import Threads from '../../components/ReactBits/ThreadsBackground/Threads';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import Header from '../../components/Header/Header';

import { experiences } from '../../constants/experience';

import type { ExperienceItem } from '../../constants/experience';

const Experience = () => {

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

                <span>MY JOURNEY</span>

                <h2> Experience & Growth</h2>
                <p>My path through software development, artificial intelligence and engineering.</p>

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