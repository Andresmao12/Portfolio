import { useState } from "react";

import { post } from "../services/api";


import type { AnalyserResponse } from "../interfaces/analyser.interface";

interface analyzeParameters { idea: string, language: String }

export const useApiAnalyzer = () => {

    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<AnalyserResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const analyze = async ({ idea, language }: analyzeParameters) => {

        try {

            setLoading(true);
            setError(null);
            setAnalysis(null);

            const result = await post({
                endpoint: "analyzer",
                data: { idea, language }
            });

            console.log("data", result.data)

            setAnalysis(result.data);

            return result;

        } catch (err) {

            setError(
                err instanceof Error
                    ? err.message
                    : String(err)
            );

            throw err;

        } finally {
            setLoading(false);
        }
    };

    return {
        analyze,
        loading,
        analysis,
        error
    };
};