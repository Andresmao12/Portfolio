import { Request, Response } from 'express';

import { aiValidate, sendEmail } from '../services/contact.service';

import type { AiResponse } from '../interfaces/contact.interface'
import type { ApiResponse } from '../interfaces/global.interface'

export const sendContactEmail = async (req: Request, res: Response<ApiResponse<AiResponse>>) => {

    try {
        const { name, email, subject, message, forceSend = false } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing fields'
            });
        }

        if (!forceSend) {
            const aiResponse = await aiValidate(message)

            if (aiResponse.isFaq) {
                return res.status(200).json({
                    status: 'success',
                    message: 'Ai responded correctly',
                    data: aiResponse,
                })
            }
        }

        await sendEmail({ name, email, subject, message });

        return res.status(200).json({
            status: 'success',
            message: 'Message sent successfully'
        });

    } catch (error) {

        if (error instanceof Error && error.message.includes('503')) {
            return res.status(503).json({
                status: 'error',
                message: 'The AI is temporarily busy. Try again in a few minutes.'
            });
        }

        return res.status(500).json({
            status: "error",
            message: "unknow error"
        });
    }
};

export const sendFeedback = (req: Request, res: Response<any>) => {
    try {
        const { question, faqCategory = null, resolved } = req.body;

        if (!question) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing fields'
            });
        }

        // LOGICA PARA GUARDAR FEEDBACK, DEFINIR DONDE ALMACENAR

        return res.status(200).json({
            status: 'success',
            message: 'Feedback sent successfully'
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Unknow error"
        });
    }
}