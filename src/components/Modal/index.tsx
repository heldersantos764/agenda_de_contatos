import { MouseEventHandler, ReactNode } from "react";

interface ModalProps {
    open: boolean;
    onClose?: () => void;
    children: ReactNode;
    onClick?: MouseEventHandler;
}

function Modal({ open, onClose, children }: ModalProps) {


    return (
        <div onClick={onClose} className={`
            z-100 insert-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible max-h-0"}  
        `}>
            {children}
        </div>
    );
}

export {Modal}