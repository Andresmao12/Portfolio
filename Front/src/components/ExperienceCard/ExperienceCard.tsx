import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    year: string;
    company?: string;
    position?: string;
    title: string;
    description: string;
    skills: string[];
}

const ExperienceCard = ({ year, company, position, title, description, skills }: ExperienceCardProps) => {

    return (
        <article className={styles.card}>

            <div className={styles.header}>

                <span className={styles.year}>{year}</span>
                <h3 className={styles.title}>{title}</h3>

                {company && (<span className={styles.company}>{company}</span>)}
                {position && (<span className={styles.position}>{position}</span>)}

            </div>

            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>

                {skills.map(skill => <li key={skill} className={styles.skill}>{skill}</li>)}
            
            </ul>

        </article>
    );
};

export default ExperienceCard;