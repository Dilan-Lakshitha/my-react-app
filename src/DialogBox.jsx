import { useEffect } from "react";

const DialogBox = ({ isOpen, onClose, children, type }) => {
    console.log(type);
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                onClose(type);
            }
        };
        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, [onClose, type]);

    if (!isOpen) return null;

    return (
        <div className="overlay border">
            <div className="dialog">
                <button className="close-btn" onClick={() => onClose(type)}>×</button>
                
                {children}

                <div className="buttons-container">
                    <button className="cancel-btn" onClick={() => onClose(type)}>Cancel</button>
                    <button className="deactivate-btn">{type}</button>
                </div>
            </div>
        </div>
    );
};

export default DialogBox;
