'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>🖥️ TechParts</div>

        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
          <Link href="/parts" className={pathname === '/parts' ? styles.active : ''}>Parts</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {open && (
        <div className={styles.sidebar}>
          <button className={styles.closeButton} onClick={closeMenu}>×</button>
          <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={closeMenu}>Home</Link>
          <Link href="/parts" className={pathname === '/parts' ? styles.active : ''} onClick={closeMenu}>Parts</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''} onClick={closeMenu}>About</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''} onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
}
