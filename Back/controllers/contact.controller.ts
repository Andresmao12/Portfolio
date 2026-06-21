import { Request, Response } from 'express';

import { aiValidate, sendEmail } from '../services/contact.service';

import type { AiResponse } from '../interfaces/contact.interface'
import type { ApiResponse } from '../interfaces/global.interface'

export const sendContactEmail = async (req: Request, res: Response<ApiResponse<AiResponse>>) => {

    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'Missing fields'
            });
        }

        const aiResponse = await aiValidate(message)

        if (aiResponse.isFaq) {
            return res.status(200).json({
                status: 'success',
                message: 'Ai responded correctly',
                data: aiResponse
            })
        }

        await sendEmail({ name, email, subject, message });

        return res.status(200).json({
            status: 'success',
            message: 'Message sent successfully'
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            status: "error",
            message: `Error: ${error}`
        });
    }
};