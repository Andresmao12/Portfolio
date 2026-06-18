import styles from './Header.module.css'

interface HeaderProps {
    children: React.ReactNode;
    center?: boolean;
}

const Header = ({ children, center = false }: HeaderProps) => <header className={`${styles.header} ${center && styles.center}`}>{children}</header>

export default Header