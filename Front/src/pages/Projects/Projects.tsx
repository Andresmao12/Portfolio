import styles from './Projects.module.css';


import { FiGithub, FiExternalLink } from 'react-icons/fi';

import Header from '../../components/Header/Header';

import { projects } from '../../constants/projects'

const Projects = () => {


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
                <span>PROJECTS</span>
                <h2>Selected Work</h2>
                <p>
                    A collection of software, AI and cloud
                    solutions built across different domains.
                </p>
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
                                    <strong>Challenge</strong>
                                    <p>{project.challenge}</p>

                                    <strong>Solution</strong>
                                    <p>{project.solution}</p>

                                    <strong>Impact</strong>
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
                                            Github
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FiExternalLink />
                                            Demo
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