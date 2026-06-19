import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/context';

const ThemeToggle = () => {

    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark'
                ? <Sun />
                : <Moon />}
        </button>
    );
};

export default ThemeToggle;