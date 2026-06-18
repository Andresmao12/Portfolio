import { useState } from 'react';

export const useProjectAnalyzer = () => {

    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);

    const analyzeProject = async () => {

        if (!idea.trim()) return;

        setLoading(true);

        try {

            const response = await fetch('/api/analyze-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idea })
            });

            const data = await response.json();

            setAnalysis(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    return {
        idea,
        setIdea,
        loading,
        analysis,
        analyzeProject
    };
};