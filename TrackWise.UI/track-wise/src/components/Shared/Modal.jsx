import { modalStyles } from "./modal.style";

function Modal({ isOpen, onClose, title, children }) {

    if (!isOpen) return null;

    return (
        <div className={modalStyles.overlay}>
            <div className={modalStyles.container}>

                <div className={modalStyles.header}>
                    <h3 className={modalStyles.title}>{title}</h3>
                    <button
                        onClick={onClose}
                        className={modalStyles.closeButton}
                    >
                        ×
                    </button>
                </div>

                <div className={modalStyles.body}>
                    {children}
                </div>

            </div>
        </div>
    );
}

export default Modal;