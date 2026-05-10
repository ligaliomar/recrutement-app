import Link from 'next/link'
import styles from './Naviguation.module.css'

export default function Naviguation() {
 return (
   <nav className={styles.nav}>
     <div className="container">
        <ul className={styles.menu}>
                <li>
                <Link href="/" className={styles.link}>
                    Accueil
                </Link>
                </li>
                <li>
                <Link href="/candidats" className={styles.link}>
                    Candidater
                </Link>
                </li>
            </ul>
    </div>
    </nav>
    )}
        
    