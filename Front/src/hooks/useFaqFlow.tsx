import { useState } from "react";

interface UseFaqFlowProps {
    createMessage: (data: any) => Promise<any>;
    sendFeedback: (data: any) => Promise<any>;
}

interface ResolveFaqParameters {
    question: string,
    faqCategory?: string,
    resetForm: () => void;
}


interface SendAnywayParameters {
    formData: any;
    faqCategory?: string;
}

export const useFaqFlow = ({ createMessage, sendFeedback }: UseFaqFlowProps) => {

    const [faqModalOpen, setFaqModalOpen] = useState<boolean>(false);

    const openFaqModal = () => setFaqModalOpen(true);
    const closeFaqModal = () => setFaqModalOpen(false);

    const resolveFaq = async ({ question, faqCategory, resetForm }: ResolveFaqParameters) => {

        await sendFeedback({ question, faqCategory, resolved: true });

        closeFaqModal();
        resetForm();
    };

    const sendAnyway = async ({ formData, faqCategory }: SendAnywayParameters) => {

        await sendFeedback({ question: formData.message, faqCategory, resolved: false });

        await createMessage({
            ...formData,
            forceSend: true
        });

        closeFaqModal();
    };

    return {
        faqModalOpen,
        openFaqModal,
        closeFaqModal,
        resolveFaq,
        sendAnyway
    };
};