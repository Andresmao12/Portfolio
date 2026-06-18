export interface ExperienceItem {
    year: string;
    title: string;
    company: string;
    subtitle?: string;
    description: string;
    skills: string[];
    current?: boolean;
}

export const experiences: ExperienceItem[] = [
    {
        year: '2022',
        title: 'Software technician',
        company: 'SENA',
        description:
            'Strong foundations in software engineering, databases and backend development.',
        skills: [
            'Python',
            'REST APIs',
            'Godot',
        ]
    }, {
        year: '2025',
        title: 'Software Technologist',
        company: 'Institucion universitaria ITM',
        description:
            'Strong foundations in software engineering, databases and backend development.',
        skills: [
            'Node.js',
            'Java',
            'C#',
            '.NET',
            'Python',
            'Azure',
            'SQL Server',
            'PostgreSQL',
            'REST APIs'
        ]
    },
    {
        year: '2025',
        title: 'AI Internship',
        company: 'Proteccion S.A.',
        description:
            'Worked with artificial intelligence initiatives, process automation and software solutions for the financial sector.',
        skills: [
            'AWS bedrock',
            'Cloudwatch',
            'Scrum',
            'ML',
            'LLM\'S',
            'IAC',
            'Fine-tunning',
            'Prompt engineering',
            'Typescript',
            'RAG',
            'Vectorial DB',

        ]
    },
    {
        year: '2026',
        current: true,
        title: 'Systems Engineering Student',
        company: 'Institucion universitaria ITM',
        description:
            'Expanding knowledge in software architecture, scalable systems and modern development practices.',
        skills: [
            'Software Architecture',
            'System Design',
            'Full Stack Development'
        ]
    },
];