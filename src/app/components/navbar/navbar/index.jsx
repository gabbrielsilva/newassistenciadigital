"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <div
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre Nós</Link></li>
                <li className={styles.dropdown}>
                    <Link href="/servicos">Serviços</Link>
                    <div className={styles.dropdownMenu}>
                        <Link href="/criacao-sites">Criação de Sites</Link>
                        <Link href="/marketing-digital">Marketing Digital</Link>
                        <Link href="/seo">SEO</Link>
                    </div>
                </li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
            <div className={styles.contact}>
                <div className={styles.numero}>Tel: 21 965687628</div>
                <a href='https://wa.me/5521965687628' className={styles.contato}>Entre em contato</a>
            </div>
        </nav>
    );
}