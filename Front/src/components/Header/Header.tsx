import styles from './Header.module.css'

interface HeaderProps {
    children: React.ReactNode;
    ClassName?: string,
    center?: boolean;
}

const Header = ({ children, ClassName = '', center = false }: HeaderProps) => <header className={`${styles.header} ${center && styles.center} ${ClassName}`}>{children}</header>

export default Header