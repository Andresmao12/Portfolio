import styles from './Contact.module.css';

import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import InputLabel from '../../components/InputLabel/InputLabel';

import { contactItems } from '../../constants/contact'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('FORMDATA: ', formData)
    };

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className={styles.contactSection}>

            <div className={styles.contactCard}>

                <Header>
                    <span>CONTACT</span>
                    <h2>Let's Connect</h2>
                    <p>Interested in software development, AI solutions, cloud technologies or collaboration opportunities.</p>
                </Header>

                <div className={styles.status}>
                    <span className={styles.dot}></span>
                    Open to opportunities
                </div>

                <div className={styles.actions}>
                    {contactItems.map(item => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.actionCard}
                                style={{
                                    '--contact-color': item.color
                                } as React.CSSProperties}
                            >

                                <Icon className={styles.icon} />
                                <h3>{item.title}</h3>
                                <small>{item.subtitle}</small>

                            </a>
                        );
                    })}
                </div>
            </div>


            <form className={styles.formCard} onSubmit={handleSubmit}>
                <Header>
                    <span>START A CONVERSATION</span>
                    <p>Tell me about your project, idea or question.</p>
                </Header>

                <div className={styles.inputGroup}>
                    <InputLabel id='name' label='Your name' type='input' onChange={(value) => handleChange('name', value)} />
                    <InputLabel id='email' label='Email Address' type='email' onChange={(value) => handleChange('email', value)} />
                    <InputLabel id='subject' label='Subject' type='input' onChange={(value) => handleChange('subject', value)} />
                    <InputLabel id='message' label='Tell me about your idea, project or question...' type='textArea' onChange={(value) => handleChange('message', value)} />
                </div>

                <div className={styles.footer}>
                    <span className={styles.helper}>✨ Messages may be analyzed first to determine if AI can provide an instant answer.</span>
                    <button type="submit" className={styles.submitButton} onSubmit={handleSubmit}>Send Message</button>
                </div>
            </form>

        </section>
    );
};

export default Contact;