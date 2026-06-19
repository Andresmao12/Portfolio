import { useState, useEffect } from 'react';

import styles from './Nav.module.css';

import GooeyNav from '../ReactBits/GooeyNav/GooeyNav';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import { useTranslation } from 'react-i18next';

const Nav = () => {

    const [open, setOpen] = useState(false);
    const { t } = useTranslation()


    const items = [
        { label: t('nav.home'), href: "#home" },
        { label: t('nav.experience'), href: "#experience" },
        { label: t('nav.projects'), href: "#projects" },
        { label: t('nav.stack'), href: "#stack" },
        { label: t('nav.analyzer'), href: "#clients" },
        { label: t('nav.contact'), href: "#contact" }
    ];

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {

        let lastScrollY = window.scrollY;

        const handleScroll = () => {

            const current = window.scrollY;
            const delta = current - lastScrollY;

            if (current < 100) {
                setShowNav(true);
            }
            else if (delta > 10) {
                setShowNav(false);
            }
            else if (delta < -10) {
                setShowNav(true);
            }

            lastScrollY = current;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (

        <nav className={`${styles.navContainer} ${showNav ? styles.visible : styles.hidden}`}>

            {/* Desktop */}
            <div className={styles.desktopNav}>

                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1]}
                />
                <ThemeToggle />
                <LanguageToggle />

            </div>

            {/* Mobile */}
            <button
                className={styles.menuButton}
                onClick={() => setOpen(!open)}
                aria-label="Open menu"
            >
                ☰
            </button>

            <div
                className={`${styles.mobileMenu} ${open ? styles.open : ''
                    }`}
            >

                {items.map((item) => (

                    <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                    >
                        {item.label}
                    </a>

                ))}

                <ThemeToggle />

            </div>

        </nav>

    );
};

export default Nav;