import { GoogleGenAI } from "@google/genai";
import { Resend } from 'resend';

import faqs from '../constants/faq.json'

import type { AiResponse, ContactEmail } from '../interfaces/contact.interface'

const resend = new Resend(process.env.RESEND_API_KEY);


export const aiValidate = async (message: string): Promise<AiResponse> => {

    console.log("Stringify FAQS: ", JSON.stringify(faqs))

    const PROMPT = `
        Eres un agente especializado en clasificar preguntas frecuentes para un portafolio profesional.

        OBJETIVO:
        Determinar si la pregunta del usuario puede responderse utilizando ÚNICAMENTE la información disponible en las preguntas frecuentes proporcionadas.

        REGLAS:
        1. Analiza el mensaje del usuario.
        2. Busca preguntas frecuentes relacionadas semánticamente.
        3. Considera equivalencias, sinónimos y diferentes formas de expresar la misma intención.
        4. Solo responde isFaq=true si la información disponible permite responder la pregunta de forma completa y confiable.
        5. Nunca inventes información.
        6. Nunca utilices conocimiento externo.
        7. Si la información es insuficiente o existe duda razonable, responde isFaq=false.
        8. Si respondes isFaq=true:
        - genera una respuesta natural y amigable.
        - puedes usar uno o dos emojis relevantes.
        - utiliza únicamente información presente en las FAQs.
        - agrega la categoria con la que encontraste coincidencias.
        9. Si respondes isFaq=false:
        - no incluyas answer ni faqCategory

        PREGUNTA DEL USUARIO:
        ${message}

        PREGUNTAS FRECUENTES:
        ${JSON.stringify(faqs)}

        FORMATO DE RESPUESTA OBLIGATORIO:
        {
            "isFaq": boolean,
            "faqCategory"?: string,
            "answer"?: string
        }

        No agregues explicaciones.
        No agregues texto adicional.
        No uses markdown.
        Responde únicamente el JSON.
`

    try {
        const ai = new GoogleGenAI({});

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: PROMPT,
        });
        console.log(`--- PROMPT: ${PROMPT}`)
        console.log(`--- RESPONSE: ${response.text}`);

        const result = JSON.parse(response.text || '{}') as AiResponse;
        return result;

    } catch (error) {
        console.error('Gemini error:', error);
        throw new Error('AI validation failed');
    }
}


export const sendEmail = async ({ name, email, subject, message }: ContactEmail) => {

    await resend.emails.send({

        from: 'Portfolio <onboarding@resend.dev>',

        to: process.env.RECEIVER_EMAIL!,

        subject,

        html: `
            <h2>Nuevo mensaje</h2>

            <p><strong>Nombre:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Mensaje:</strong></p>

            <p>${message}</p>
        `
    });
};