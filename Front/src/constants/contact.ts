import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileDownload
} from 'react-icons/fa';

export const contactItems = [
    {
        key: 'github',
        icon: FaGithub,
        color: '#F05032',
        href: 'https://github.com/Andresmao12/'
    },
    {
        key: 'linkedin',
        icon: FaLinkedin,
        color: '#0A66C2',
        href: 'https://www.linkedin.com/in/andres-mauricio-agudelo-elorza-906728258/'
    },
    {
        key: 'resume',
        icon: FaFileDownload,
        color: '#8B5CF6',
        href: '/cv.pdf'
    },
    {
        key: 'email',
        icon: FaEnvelope,
        color: '#22C55E',
        href: 'mailto:correo@correo.com'
    }
] as const;