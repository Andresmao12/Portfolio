import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/context';

import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {

    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <button onClick={toggleTheme} className={styles.toggleButton}>
            <span className={styles.themeLabel}>
                {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
            {theme === 'dark'
                ? <Sun />
                : <Moon />}
        </button>
    );
};

export default ThemeToggle;