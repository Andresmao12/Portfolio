interface Project {
    title: string;
    category: string;
    image: string;

    challenge: string;
    solution: string;
    impact: string;

    technologies: string[];

    github?: string;
    demo?: string;

    featured?: boolean;
    refill?: boolean;
}

export const projects: Project[] = [
    {
        title: 'AI Project Analyzer',
        category: 'Artificial Intelligence',
        image: '/projects/analyzer.webp',

        challenge:
            'Validate software ideas before investing development effort.',

        solution:
            'Multi-agent AI workflow capable of analyzing feasibility, architecture and technical risks.',

        impact:
            'Provides immediate project feedback and implementation guidance.',

        technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'OpenAI'
        ],

        github: '#',
        demo: '#',

        featured: true
    },

    {
        title: 'Financial Assistant',
        category: 'AI Assistant',
        image: '/projects/financial.webp',

        challenge:
            'Automate internal support processes.',

        solution:
            'Conversational assistant integrated with enterprise workflows.',

        impact:
            'Reduced repetitive support tasks.',

        technologies: [
            'Python',
            'OpenAI',
            'PostgreSQL'
        ]
    },

    {
        title: 'Cloud Infrastructure',
        category: 'DevOps',
        image: '/projects/cloud.webp',

        challenge:
            'Deploy scalable environments.',

        solution:
            'Infrastructure as Code and cloud automation.',

        impact:
            'Improved deployment consistency.',

        technologies: [
            'AWS',
            'Terraform',
            'Docker'
        ]
    },

    {
        title: 'Portfolio V3',
        category: 'Frontend',
        image: '/projects/portfolio.webp',

        challenge:
            'Create an interactive developer portfolio.',

        solution:
            'Modern React architecture with advanced UI interactions.',

        impact:
            'Showcases projects and technical expertise.',

        technologies: [
            'React',
            'TypeScript',
            'CSS'
        ]
    }, {
        title: 'AI Project Analyzer',
        category: 'Artificial Intelligence',
        image: '/projects/analyzer.webp',

        challenge:
            'Validate software ideas before investing development effort.',

        solution:
            'Multi-agent AI workflow capable of analyzing feasibility, architecture and technical risks.',

        impact:
            'Provides immediate project feedback and implementation guidance.',

        technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'OpenAI'
        ],

        github: '#',
        demo: '#',

    },

    {
        title: 'Financial Assistant',
        category: 'AI Assistant',
        image: '/projects/financial.webp',

        challenge:
            'Automate internal support processes.',

        solution:
            'Conversational assistant integrated with enterprise workflows.',

        impact:
            'Reduced repetitive support tasks.',

        technologies: [
            'Python',
            'OpenAI',
            'PostgreSQL'
        ],
        featured: true
    }
];