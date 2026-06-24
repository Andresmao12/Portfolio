export interface AnalyserResponse {
    viability: string;
    complexity: string;
    timeline: string;
    estimatedCost: string;
    stack: string[];
    mvp: string[];
    roadmap: string[];
}

export interface AnalyzeIdeaParams {
    idea: string,
    language: string
}
