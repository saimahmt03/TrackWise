function Modal({ isOpen, onClose, title, children }) {

    if (!isOpen) return null;

    return (
        <div style={overlay}>
            <div style={modalBox}>

                <div style={header}>
                    <h3>{title}</h3>
                    <button onClick={onClose}>X</button>
                </div>

                {children}

            </div>
        </div>
    );
}

const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const modalBox = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px"
};

const header = {
    display: "flex",
    justifyContent: "space-between"
};

export default Modal;