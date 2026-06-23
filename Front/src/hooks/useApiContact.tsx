import { useState } from "react";
import { post } from "../services/api";

import type { ContactEmail, ApiResponse, AiResponse, FaqFeedback } from "../interfaces/contact.interface";

export const useApi = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [data, setData] = useState<AiResponse | null>(null)


    const createMessage = async (data: ContactEmail) => {

        setSuccess(false);
        setError(null);
        setLoading(true);

        try {
            const result = await post({ endpoint: "contact", data }) as ApiResponse<AiResponse>;

            if (result.status == "success" && result.data?.isFaq) {
                setSuccess(true)
                setData(result.data)
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
        return post({ endpoint: 'contact/feedback', data });
    }


    return { createMessage, sendFeedback, loading, error, success, data };
}
