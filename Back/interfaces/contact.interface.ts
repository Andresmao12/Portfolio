export interface ContactEmail {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface AiResponse {
    isFaq: boolean,
    faqCategory?: string,
    answer?: string,
}
