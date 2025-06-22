import "./_modal.scss";

const Modal = ({
    title,
    isOpen,
    onClose,
    children }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="wmd-modal-container"
            onClick={onClose} // Close modal when clicking outside content
        >
            <div className="wmd-modal"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
                <header className="wmd-modal-header">
                    <h2 className="wmd-modal-title">{title}</h2>
                    <button className="wmd-modal-cross" onClick={onClose}>
                        &times;
                    </button>
                </header>
                <main className="wmd-modal-body">
                    {children}
                </main>
                <footer className="wmd-modal-footer">
                    <button className="wmd-btn wmd-btn-cancel" onClick={onClose}>Cancel</button>
                    {/* <button className="wmd-btn wmd-btn-primary">Submit</button> */}
                </footer>
            </div>
        </div>
    );
};

export default Modal;