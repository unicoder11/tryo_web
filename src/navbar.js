import Link  from "next/link"
import Image from "next/image"
import { useState } from "react"
import Logo from "./components/logo"
import styles from '../styles/Navbar.module.css'


export const Nabvar = () => {
    const [active, setActive] = useState(false);

    return (
        <>
        <header className={styles.header}>
        {/* <Link className={styles.logo} href='/' passHref><Image src='/tryo_color.png' width='35px' height='36px' alt="logo" /></Link> */}
        <Link  href='/' passHref>
            <Logo className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.nav__links}>
                    <li className={styles.li}><a className={styles.a} href="#parceiro">Seja parceiro</a></li>
                    <li className={styles.li}><a className={styles.a} href="#duvidas">Duvidas</a></li>
                    <li className={styles.li}><a className={styles.a} href="#sobre">Sobre</a></li>
                    <li className={styles.li}><a className={styles.a} href="#contato">Contato</a></li>   
                </ul>
            </nav>
                <Link href='/abra'passHref>
                    <span className={styles.button} >
                     <a className={styles.button__text}>Abra sua conta</a> 
                    </span>
                </Link>
        </header>
        
        </>
    )
} 