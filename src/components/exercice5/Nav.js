import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><a href="#home" className={styles.a}>Accueil</a></li>
                <li className={styles.li}><a href="#about" className={styles.a}>A propos</a></li>
                <li className={styles.li}><a href="#contact" className={styles.a}>Contact</a></li>
            </ul>
        </nav>

    );
};

export default Nav;