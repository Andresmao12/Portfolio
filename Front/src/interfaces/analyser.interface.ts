export interface AnalyserResponse {
    viability: string,
    complexity: string,
    timeline: string,
    estimatedCost: estimatedCost,
    costReason: string,
    stack: string[],
    mvp: string[],
    roadmap: string[];
}


interface estimatedCost {
    min: number,
    max: number,
    currency: "USD" | "COP"
}