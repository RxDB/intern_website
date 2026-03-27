import {useState,useEffect} from 'react'
import styles from './Navbar.module.css'

const Navbar = ()=>{
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=> clearInterval(interval);
    },[]);
    return(
        <header className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>ArchitectEditor</div>
                <div className={styles.time}>{time}</div>
            </div>

            <nav className={styles.navLinks}>
                <a className={styles.link}>Login</a>
                <a className={styles.link}>Find Us</a>
                <a className={styles.dp}>DP</a>
            </nav>
        </header>
    )
}

export default Navbar