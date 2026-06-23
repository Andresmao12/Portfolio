import styles from './Modal.module.css';

interface ModalProps {
    open: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}

const Modal = ({ open, children, onClose }: ModalProps) => {

    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;