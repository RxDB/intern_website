import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>ARCHITECT EDITOR</div>
                <div className={styles.time}>{time}</div>
            </div>

            <nav className={styles.navLinks}>
                <a href='#' className={styles.link}>Login</a>
                <a href='#' className={styles.link}>Find Us</a>
                <div className={styles.dp}>DP</div>
            </nav>
        </header>
    )
}

export default Navbar