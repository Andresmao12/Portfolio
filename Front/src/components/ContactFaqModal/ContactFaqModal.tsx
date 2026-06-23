import styles from './ContactFaqModal.module.css';

import Modal from '../Modal/Modal';

interface Props {
    open: boolean;
    name: string;
    answer?: string;
    onResolved: () => void;
    onSendAnyway: () => void;
    onClose: () => void;
}

const ContactFaqModal = ({
    open,
    name,
    answer,
    onResolved,
    onSendAnyway,
    onClose
}: Props) => {

    if (!open) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <div className={styles.container}>

                <h2>Hola {name} 😊</h2>

                <div className={styles.answerBox}>{answer}</div>

                <p>¿Esto resolvió tu duda?</p>

                <div className={styles.actions}>

                    <button type="button" onClick={onResolved}>
                        Sí, me ayudó 👍
                    </button>

                    <button type="button" onClick={onSendAnyway}>
                        No, enviar correo 🤨
                    </button>

                </div>

            </div>
        </Modal>
    );
};

export default ContactFaqModal;