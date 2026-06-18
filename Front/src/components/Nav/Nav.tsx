import { useState, useEffect } from 'react';

import styles from './Nav.module.css';

import GooeyNav from '../ReactBits/GooeyNav/GooeyNav';

const Nav = () => {

    const [open, setOpen] = useState(false);

    const items = [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Stack", href: "#stack" },
        { label: "AI Analyzer", href: "#clients" },
        { label: "Contact", href: "#contact" }
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

            </div>

        </nav>

    );
};

export default Nav;