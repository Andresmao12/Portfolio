import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCssmodules,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiDotnet,
    SiSharp,
    SiPostgresql,
    SiDocker,
    SiGooglecloud,
    SiGit,
    SiTerraform,
} from 'react-icons/si';

import { DiMsqlServer } from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';
import { TbChartBar } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { TbBrain } from 'react-icons/tb';


import type { IconType } from 'react-icons';

export const stackLogos = [
    {
        node: SiReact,
        title: 'React'
    },
    {
        node: SiTypescript,
        title: 'TypeScript'
    },
    {
        node: SiNodedotjs,
        title: 'Node.js'
    },
    {
        node: SiPython,
        title: 'Python'
    },
    {
        node: SiPostgresql,
        title: 'PostgreSQL'
    },
    {
        node: TbBrain,
        title: 'AI'
    }
];


// STACK SECTION

export interface Technology {
    name: string;
    icon: IconType;
    color: string;
    years: number;
    projects: number;
}

export interface StackCategory {
    title: string;
    technologies: Technology[];
}

export const stackCategories: StackCategory[] = [
    {
        title: 'Frontend',
        technologies: [
            {
                name: 'React',
                icon: SiReact,
                color: '#61DAFB',
                years: 3,
                projects: 8
            },
            {
                name: 'TypeScript',
                icon: SiTypescript,
                color: '#3178C6',
                years: 2,
                projects: 6
            },
            {
                name: 'JavaScript',
                icon: SiJavascript,
                color: '#F7DF1E',
                years: 3,
                projects: 10
            },
            {
                name: 'HTML',
                icon: SiHtml5,
                color: '#E34F26',
                years: 3,
                projects: 12
            },
            {
                name: 'CSS',
                icon: SiCssmodules,
                color: '#1572B6',
                years: 3,
                projects: 12
            },
            {
                name: 'Tailwind',
                icon: SiTailwindcss,
                color: '#06B6D4',
                years: 2,
                projects: 5
            },
            {
                name: 'Bootstrap',
                icon: SiBootstrap,
                color: '#7952B3',
                years: 3,
                projects: 10
            }
        ]
    },
    {
        title: 'Backend',
        technologies: [
            {
                name: 'Node.js',
                icon: SiNodedotjs,
                color: '#339933',
                years: 2,
                projects: 6
            },
            {
                name: 'Express',
                icon: SiExpress,
                color: '#FFFFFF',
                years: 2,
                projects: 5
            },
            {
                name: 'Python',
                icon: SiPython,
                color: '#3776AB',
                years: 2,
                projects: 4
            },
            {
                name: 'C#',
                icon: SiSharp,
                color: '#68217A',
                years: 1,
                projects: 2
            },
            {
                name: '.NET',
                icon: SiDotnet,
                color: '#512BD4',
                years: 1,
                projects: 2
            },
            {
                name: 'Java',
                icon: FaJava,
                color: '#F89820',
                years: 2,
                projects: 4
            }
        ]
    },
    {
        title: 'Cloud & DevOps',
        technologies: [
            {
                name: 'AWS',
                icon: FaAws,
                color: '#FF9900',
                years: 1,
                projects: 3
            },
            {
                name: 'Docker',
                icon: SiDocker,
                color: '#2496ED',
                years: 1,
                projects: 3
            },
            {
                name: 'Terraform',
                icon: SiTerraform,
                color: '#844FBA',
                years: 1,
                projects: 2
            },
            {
                name: 'Azure',
                icon: VscAzure,
                color: '#0078D4',
                years: 1,
                projects: 2
            },
            {
                name: 'GCP',
                icon: SiGooglecloud,
                color: '#4285F4',
                years: 1,
                projects: 2
            }
        ]
    },
    {
        title: 'Artificial Intelligence',
        technologies: [
            {
                name: 'AWS Bedrock',
                icon: FaAws,
                color: '#FF9900',
                years: 1,
                projects: 2
            },
            {
                name: 'LLMs',
                icon: TbBrain,
                color: '#A855F7',
                years: 1,
                projects: 4
            },
            {
                name: 'Machine Learning',
                icon: TbBrain,
                color: '#22C55E',
                years: 1,
                projects: 3
            },
            {
                name: 'Fine Tuning',
                icon: TbBrain,
                color: '#EC4899',
                years: 1,
                projects: 2
            }
        ]
    },
    {
        title: 'Databases & BI',
        technologies: [
            {
                name: 'PostgreSQL',
                icon: SiPostgresql,
                color: '#4169E1',
                years: 2,
                projects: 5
            },
            {
                name: 'SQL Server',
                icon: DiMsqlServer,
                color: '#CC2927',
                years: 2,
                projects: 4
            },
            {
                name: 'Power BI',
                icon: TbChartBar,
                color: '#F2C811',
                years: 1,
                projects: 3
            }
        ]
    },
    {
        title: 'Software Engineering',
        technologies: [
            {
                name: 'Git',
                icon: SiGit,
                color: '#F05032',
                years: 3,
                projects: 15
            }
        ]
    }
];