import styles from './Contact.module.css';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import InputLabel from '../../components/InputLabel/InputLabel';

import { contactItems } from '../../constants/contact';

const Contact = () => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('FORMDATA: ', formData);
    };

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

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

                                <h3>
                                    {t(`contact.actions.${item.key}.title`)}
                                </h3>

                                <small>
                                    {t(`contact.actions.${item.key}.subtitle`)}
                                </small>

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
                        label={t('contact.form.name')}
                        type='input'
                        onChange={(value) => handleChange('name', value)}
                    />

                    <InputLabel
                        id='email'
                        label={t('contact.form.email')}
                        type='email'
                        onChange={(value) => handleChange('email', value)}
                    />

                    <InputLabel
                        id='subject'
                        label={t('contact.form.subject')}
                        type='input'
                        onChange={(value) => handleChange('subject', value)}
                    />

                    <InputLabel
                        id='message'
                        label={t('contact.form.message')}
                        type='textArea'
                        onChange={(value) => handleChange('message', value)}
                    />

                </div>

                <div className={styles.footer}>
                    <span className={styles.helper}>
                        {t('contact.form.helper')}
                    </span>

                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        {t('contact.form.button')}
                    </button>

                </div>

            </form>

        </section>
    );
};

export default Contact;