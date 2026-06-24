import { useState } from "react";
import { post } from "../services/api";

import type { ContactEmail, ApiResponse, AiResponse, FaqFeedback } from "../interfaces/contact.interface";

export const useApi = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [data, setData] = useState<AiResponse | null>(null)


    const createMessage = async (data: ContactEmail) => {

        setSuccess(false);
        setError(null);
        setLoading(true);

        try {
            const result = await post({ endpoint: "contact", data }) as ApiResponse<AiResponse>;

            if (result.status == "success" && result.data?.isFaq) {
                setData(result.data)

            } else if (result.status == "success" && result.data && !result.data?.isFaq) {
                setData(result.data)
                setSuccess(true)
            }

            return result;

        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError(String(err));
            throw err;

        } finally {
            setLoading(false);
        }
    }


    const sendFeedback = async (data: FaqFeedback) => {

        try {
            return post({ endpoint: 'contact/feedback', data });

        } catch (error) {
            console.error('Error sending feedback:', error);
            throw error;
        }
    }


    return { createMessage, sendFeedback, loading, error, success, data };
}