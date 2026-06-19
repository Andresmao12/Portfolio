import styles from './Projects.module.css';


import { FiGithub, FiExternalLink } from 'react-icons/fi';

import Header from '../../components/Header/Header';

import { projects } from '../../constants/projects'
import { useTranslation } from 'react-i18next';


const Projects = () => {

    const { t } = useTranslation()

    for (let i = 1; i < projects.length; i += 2) {

        if (!projects[i]?.featured && !projects[i - 1]?.featured) {

            console.log('Entramos al if')
            projects[i - 1].refill = true;
            projects[i].refill = true;

        }
    }

    console.log(projects)

    return (
        <section id="projects" className={styles.projectsSection}>

            <Header center>
                <span>{t('projects.badge')}</span>
                <h2>{t('projects.title')}</h2>
                <p>{t('projects.description')}</p>
            </Header>

            <div className={styles.grid}>

                {projects.map(project => (

                    <article
                        key={project.title}
                        className={`${styles.card} ${project.featured && styles.featured} ${project.refill && styles.refill}`}
                    >

                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                        />

                        <div className={styles.overlay}>

                            <span className={styles.category}>{project.category}</span>
                            <h3>{project.title}</h3>

                            <div className={styles.content}>

                                <div className={styles.info}>
                                    <strong>{t('projects.challenge')}</strong>
                                    <p>{project.challenge}</p>

                                    <strong>{t('projects.solution')}</strong>
                                    <p>{project.solution}</p>

                                    <strong>{t('projects.impact')}</strong>
                                    <p>{project.impact}</p>
                                </div>

                                <div className={styles.techs}>
                                    {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
                                </div>

                                <div className={styles.actions}>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FiGithub />
                                            {t('projects.github')}
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FiExternalLink />
                                            {t('projects.demo')}
                                        </a>
                                    )}
                                </div>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
};

export default Projects;