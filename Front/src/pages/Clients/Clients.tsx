import styles from './Clients.module.css';
import { useState } from 'react';

import Header from '../../components/Header/Header';
import ReflectiveCard from '../../components/ReactBits/ReflectiveCard/ReflectiveCard';

import { useTranslation } from 'react-i18next';

const testimonials = [
    {
        name: 'Startup Founder',
        company: 'SaaS Platform',
        feedback:
            'The MVP was delivered faster than expected. Communication and technical decisions were excellent.'
    },
    {
        name: 'Business Owner',
        company: 'Retail Company',
        feedback:
            'The AI proposal helped us validate the project before investing resources.'
    },
    {
        name: 'Product Manager',
        company: 'Tech Startup',
        feedback:
            'Clear architecture, realistic roadmap and great understanding of the requirements.'
    }
];

const Clients = () => {

    type ErrorType = { message?: string }

    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<any>(null);
    const [error, setError] = useState<ErrorType>({});

    const { t } = useTranslation()

    const handleAnalyze = async () => {

        if (!idea.trim()) {
            setError({ message: t('clients.analyzer.errorEmptyIdea') });
            return
        }

        setError({})
        setLoading(true);

        // simulamos llamada IA

        setTimeout(() => {

            setAnalysis({
                viability: '92%',
                complexity: 'Medium',
                timeline: '6 Weeks',
                stack: [
                    'React',
                    'TypeScript',
                    'Node.js',
                    'PostgreSQL',
                    'AWS'
                ],
                mvp: [
                    'Authentication',
                    'Admin Dashboard',
                    'Analytics',
                    'AI Assistant'
                ]
            });

            setLoading(false);

        }, 2500);

    };

    return (
        <section id='clients' className={styles.clientsSection}>

            <Header center>
                <span>{t('clients.badge')}</span>
                <h2>{t('clients.title')}</h2>
                <p>{t('clients.description')}</p>
            </Header>

            <article className={styles.analyzerSection}>

                <div className={styles.visualCard}>
                    <ReflectiveCard />
                </div>

                <div className={styles.analyzerCard}>

                    <Header>
                        <span>{t('clients.analyzer.badge')}</span>
                        <h3>{t('clients.analyzer.title')}</h3>
                        <p>{t('clients.analyzer.description')}</p>
                    </Header>

                    <textarea
                        className={styles.textarea}
                        placeholder={t('clients.analyzer.placeholder')}
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                    />

                    {error.message && <span className={styles.errorMessage}>{error.message}</span>}

                    <button type='button'
                        className={styles.analyzeButton}
                        onClick={handleAnalyze}
                        disabled={loading}>
                        {loading
                            ? t('clients.analyzer.buttonAction')
                            : t('clients.analyzer.button')}
                    </button>
                    {loading && (

                        <div className={styles.loaderContainer}>
                            <div className={styles.loader}></div>
                            <p>{t('clients.analyzer.loadingDescription')}</p>
                        </div>

                    )}

                    {/* RESULT */}
                    {analysis && !loading && (

                        <div className={styles.analysisResult}>

                            <div className={styles.statsGrid}>

                                <article className={styles.statCard}>
                                    <small>{t('clients.analyzer.results.viability')}</small>
                                    <strong>{analysis.viability}</strong>
                                </article>

                                <article className={styles.statCard}>
                                    <small>{t('clients.analyzer.results.complexity')}</small>
                                    <strong>{analysis.complexity}</strong>
                                </article>

                                <article className={styles.statCard}>
                                    <small>{t('clients.analyzer.results.timeline')}</small>
                                    <strong>{analysis.timeline}</strong>
                                </article>

                            </div>

                            <div className={styles.resultBlock}>

                                <h4>{t('clients.analyzer.results.recommendedStack')}</h4>

                                <div className={styles.tags}>

                                    {analysis.stack.map((item: string) => (

                                        <span key={item}>
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            <div className={styles.resultBlock}>

                                <h4>{t('clients.analyzer.results.suggestedMvp')}</h4>

                                <ul>

                                    {analysis.mvp.map((item: string) => (

                                        <li key={item}>
                                            {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <button
                                className={styles.buildButton}
                                onClick={() =>
                                    document
                                        .getElementById('contact')
                                        ?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                }
                            >
                                {t('clients.analyzer.results.buildButton')}
                            </button>

                        </div>

                    )}
                </div>

            </article>

            {/* FEEDBACKS */}

            <div className={styles.feedbackSection}>

                <Header center>
                    <span>{t('clients.feedback.badge')}</span>
                    <h3>{t('clients.feedback.title')}</h3>
                </Header>

                <div className={styles.feedbackGrid}>

                    {testimonials.map((item) => (
                        <article key={item.feedback} className={styles.feedbackCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"{item.feedback}"</p>
                            <footer>
                                <strong>{item.name}</strong>
                                <span>{item.company}</span>
                            </footer>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Clients;