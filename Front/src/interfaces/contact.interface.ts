export interface ContactEmail {
    name: string,
    email: string,
    subject: string,
    message: string,
    forceSend: boolean
}

export interface AiResponse {
    isFaq: boolean,
    faqCategory?: string,
    answer?: string,
}

export interface ApiResponse<T = null> {
    status: 'success' | 'error',
    message: string,
    data?: T
}

export interface FaqFeedback {
    question: string,
    faqCategory?: string,
    resolved: boolean
}
