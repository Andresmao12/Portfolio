import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileDownload
} from 'react-icons/fa';

export const contactItems = [
    {
        title: 'GitHub',
        subtitle: 'View Projects',
        icon: FaGithub,
        color: '#F05032',
        href: 'https://github.com/Andresmao12/'
    },
    {
        title: 'LinkedIn',
        subtitle: "Let's Connect",
        icon: FaLinkedin,
        color: '#0A66C2',
        href: 'https://www.linkedin.com/in/andres-mauricio-agudelo-elorza-906728258/'
    },
    {
        title: 'Resume',
        subtitle: 'Download CV',
        icon: FaFileDownload,
        color: '#8B5CF6',
        href: '/cv.pdf'
    },
    {
        title: 'Email',
        subtitle: 'Contact Me',
        icon: FaEnvelope,
        color: '#22C55E',
        href: 'mailto:correo@correo.com'
    }
];