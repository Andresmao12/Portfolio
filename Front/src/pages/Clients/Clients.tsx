import styles from './Clients.module.css';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../../services/i18n';

import Header from '../../components/Header/Header';
import ReflectiveCard from '../../components/ReactBits/ReflectiveCard/ReflectiveCard';
import AnalyserResult from '../../components/AnalizerReslut/AnalizerResult'

import { useApiAnalyzer } from '../../hooks/useApiAnalyzer';


//? TEMPORAL
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
    }
];

const Clients = () => {

    const [idea, setIdea] = useState('');
    const [validationError, setValidationError] = useState('');

    const { analyze, loading, analysis, error } = useApiAnalyzer();

    const { t } = useTranslation()

    const handleAnalyze = async () => {

        setValidationError('');

        if (!idea.trim()) {
            setValidationError(t('clients.analyzer.errorEmptyIdea'));
            return;
        }

        try {
            await analyze({ idea, language: i18n.language });
        } catch (error) {
            console.error(error);
        }
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

                    {validationError && (
                        <span className={styles.errorMessage}>
                            {validationError}
                        </span>
                    )}

                    {error && (
                        <span className={styles.errorMessage}>
                            {error}
                        </span>
                    )}

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

                    {analysis && !loading && (<AnalyserResult analysis={analysis} loading={loading} />)}
                </div>

            </article>

            {/* FEEDBACKS */}

            <div className={styles.feedbackSection}>

                <Header center>
                    <span>{t('clients.feedback.badge')}</span>
                    <h3>{t('clients.feedback.title')}</h3>
                </Header>

                <div className={styles.feedbackGrid}>
                    <article className={styles.firstClientCard}>
                        <strong>{t('clients.feedback.firstClient.title')}</strong>
                        <p>{t('clients.feedback.firstClient.description')}</p>
                        <span>{t('clients.feedback.firstClient.cta')}</span>
                    </article>

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