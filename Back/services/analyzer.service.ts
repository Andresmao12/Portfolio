import { GoogleGenAI } from "@google/genai";

import type { AnalyzeIdeaParams, AnalyserResponse } from "../interfaces/analyzer.interface";


export const analyzeIdea = async ({ idea, language }: AnalyzeIdeaParams): Promise<AnalyserResponse> => {

    const PROMPT = `
    Eres un CTO senior especializado en validación de productos digitales.

    CONTEXTO DEL DESARROLLADOR:

    - Ingeniero de sistemas.
    - Especializado en desarrollo web fullstack.
    - Stack principal:
    - React
    - TypeScript
    - Node.js
    - Express
    - PostgreSQL
    - SQL Server
    - Conocimientos en IA aplicada y automatización.
    - Trabaja principalmente como desarrollador individual (freelancer).

    Analiza la siguiente idea:

    ${idea}

    Devuelve exclusivamente un JSON con este formato:

    {
    "viability": "85%",
    "complexity": "Low",
    "timeline": "6 Weeks",
    "estimatedCost": {
    "min": 1500,
    "max": 3000,
    "currency": "USD"
    },
    "costReason": "Requires authentication, dashboard and analytics.",
    "stack": [
        "React",
        "Node.js"
    ],
    "mvp": [
        "Login",
        "Dashboard"
    ],
    "roadmap": [
        "Planning",
        "Development",
        "Testing",
        "Deployment"
    ]
    }

    REGLAS:
    - Responde en ${language}.
    - No uses markdown.
    - estimatedCost debe ser un objeto.
    - min y max deben ser números.
    - currency debe ser USD o COP.
    - costReason debe explicar brevemente qué influye en el costo.
    - No agregues texto adicional.
    - Usa únicamente JSON válido.
    - Máximo 5 tecnologías en stack.
    - Máximo 6 funcionalidades MVP.
    - Máximo 5 etapas en roadmap.
    - El costo debe estar basado en un desarrollador freelance individual.
    - timeline debe expresarse en semanas.
    `;

    try {

        const ai = new GoogleGenAI({});

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: PROMPT
        });

        return JSON.parse(response.text || "{}");

    } catch (error) {

        console.error("Analyzer error:", error);

        throw new Error("Idea analysis failed");
    }
};