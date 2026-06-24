import styles from './AnalizerResult.module.css'

import { useTranslation } from 'react-i18next';

import type { AnalyserResponse } from '../../interfaces/analyser.interface';

interface Props { analysis: AnalyserResponse, loading: boolean }


const AnalyserResult = ({ analysis, loading }: Props) => {

    const { t } = useTranslation();

    return (<>

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
                    <article className={`${styles.statCard} ${styles.costCard}`}>
                        <small>{t('clients.analyzer.results.estimatedCost')}</small>

                        <strong>
                            {analysis.estimatedCost.currency}
                            {" "}
                            {analysis.estimatedCost.min.toLocaleString()}
                            {" - "}
                            {analysis.estimatedCost.max.toLocaleString()}
                        </strong>
                    </article>

                </div>

                <div className={styles.costReason}>
                 <p><strong>{t('clients.analyzer.results.costDetails')}: </strong>{analysis.costReason}</p>
                </div>

                <div className={styles.resultBlock}>

                    <h4>{t('clients.analyzer.results.recommendedStack')}</h4>

                    <div className={styles.stackRow}>
                        {analysis.stack.map((tech: string) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.lineContainer}>

                    <div className={styles.resultBlock}>
                        <h4>{t('clients.analyzer.results.suggestedMvp')}</h4>

                        <div className={styles.mvpList}>
                            {analysis.mvp.map((item: string) => (
                                <div key={item} className={styles.mvpItem}>
                                    <span>✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.resultBlock}>
                        <h4>{t('clients.analyzer.results.roadmap')}</h4>

                        <div className={styles.timeline}>
                            {analysis.roadmap.map((step: string, index: number) => (
                                <div key={step} className={styles.timelineItem}>
                                    <div className={styles.timelineDot}>
                                        {index + 1}
                                    </div>

                                    <div className={styles.timelineContent}>
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
    </>
    );
};

export default AnalyserResult;