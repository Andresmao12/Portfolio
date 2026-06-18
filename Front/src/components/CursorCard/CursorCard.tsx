import { useRef } from 'react';

import styles from './CursorCard.module.css'

import type { StackCategory } from '../../constants/stack';

interface CursorCardProps {
    category: StackCategory;
}


const CursorCard = ({ category }: CursorCardProps) => {

    const cardRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {

        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.currentTarget.style.setProperty('--glow-x', `${x}px`);
        e.currentTarget.style.setProperty('--glow-y', `${y}px`);
    };


    return <article
        key={category.title}
        className={styles.card}
        ref={cardRef}
        onMouseMove={handleMouseMove}
    >

        <h3>{category.title}</h3>

        <ul className={styles.techList}>

            {category.technologies.map((tech) => {

                const Icon = tech.icon;

                return (

                    <li key={tech.name} className={styles.techItem} style={{ '--tech-color': tech.color } as React.CSSProperties} onMouseEnter={() => {
                        cardRef.current?.style.setProperty('--tech-color', tech.color);
                    }}>

                        <div className={styles.techIcon} style={{ color: tech.color }}> <Icon /></div>

                        <div className={styles.techInfo}>
                            <span>{tech.name}</span>
                            <small> {tech.years}y · {tech.projects} projects</small>
                        </div>

                    </li>

                );
            })}
        </ul>

    </article>


}

export default CursorCard