import React from 'react';
import styles from './Main1.module.css';

const Main1 = () => {
    return(
        <main className={styles.main}>
            <h2>Bienvenue sur mon site React!</h2>
            <p>React est une bibliothèque open source JavaScript 
                pour créer des interfaces utilisateurs. Elle est maintenue par Meta 
                ainsi que par une communauté de développeurs individuels et d'entreprises depuis 2013.
            </p>
        </main>

    );
};

export default Main1;