import styles from './Contact.module.css';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import InputLabel from '../../components/InputLabel/InputLabel';
import ContactFaqModal from '../../components/ContactFaqModal/ContactFaqModal';

import { contactItems } from '../../constants/contact';

import { useApiContact } from '../../hooks/useApiContact';
import { useFaqFlow } from '../../hooks/useFaqFlow';

export interface FaqFeedback {
    question: string;
    faqCategory: string;
    resolved: boolean;
}

const Contact = () => {

    const { t } = useTranslation();

    const { createMessage, sendFeedback, loading, error, success, data } = useApiContact()
    const { openFaqModal, closeFaqModal, resolveFaq, sendAnyway, faqModalOpen } = useFaqFlow({ createMessage, sendFeedback })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        forceSend: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await createMessage(formData)
            if (response?.data?.isFaq) openFaqModal();

        } catch (e) {
            console.log(e);
            return;
        }
    };

    const handleChange = (field: keyof typeof formData, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

    const handleResetData = () => setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        forceSend: false
    })


    const handleResolved = async () => resolveFaq({ question: formData.message, faqCategory: data?.faqCategory, resetForm: handleResetData })

    const handleSendAnyway = async () => sendAnyway({ formData: formData, faqCategory: data?.faqCategory })



    return (
        <section id="contact" className={styles.contactSection}>

            <div className={styles.contactCard}>

                <Header>
                    <span>{t('contact.badge')}</span>
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.description')}</p>
                </Header>

                <div className={styles.status}>
                    <span className={styles.dot}></span>
                    {t('contact.status')}
                </div>

                <div className={styles.actions}>
                    {contactItems.map(item => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.key}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.actionCard}
                                style={{
                                    '--contact-color': item.color
                                } as React.CSSProperties}
                            >
                                <Icon className={styles.icon} />

                                <h3>{t(`contact.actions.${item.key}.title`)}</h3>
                                <small>{t(`contact.actions.${item.key}.subtitle`)}</small>
                            </a>
                        );
                    })}
                </div>
            </div>

            <form className={styles.formCard} onSubmit={handleSubmit}>

                <Header>
                    <span>{t('contact.form.badge')}</span>
                    <p>{t('contact.form.description')}</p>
                </Header>

                <div className={styles.inputGroup}>

                    <InputLabel
                        id='name'
                        value={formData.name}
                        label={t('contact.form.name')}
                        type='input'
                        onChange={(value) => handleChange('name', value)}
                    />

                    <InputLabel
                        id='email'
                        value={formData.email}
                        label={t('contact.form.email')}
                        type='email'
                        onChange={(value) => handleChange('email', value)}
                    />

                    <InputLabel
                        id='subject'
                        value={formData.subject}
                        label={t('contact.form.subject')}
                        type='input'
                        onChange={(value) => handleChange('subject', value)}
                    />

                    <InputLabel
                        id='message'
                        value={formData.message}
                        label={t('contact.form.message')}
                        type='textArea'
                        onChange={(value) => handleChange('message', value)}
                    />

                </div>

                <div className={styles.footer}>
                    <span className={styles.helper}>{t('contact.form.helper')}</span>
                    <button disabled={loading} className={styles.submitButton}>

                        {(!loading && !success && !error) && t('contact.form.button')}

                        {loading && t('contact.form.sending')}
                        {success && t('contact.form.success')}
                        {error && `${t('contact.form.error')}: ${error}`}
                    </button>
                </div>
            </form>

            <ContactFaqModal
                open={faqModalOpen}
                name={formData.name}
                answer={data?.answer}
                onResolved={handleResolved}
                onSendAnyway={handleSendAnyway}
                onClose={closeFaqModal}
            />


        </section>
    );
};

export default Contact;