import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.span}>FFE-2022-3 Online</span>
        </header>
    )
}

export default Header