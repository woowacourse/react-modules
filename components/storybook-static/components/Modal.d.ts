import { ModalProps, ModalContentProps, ModalFooterProps, ModalHeaderProps } from '../types/Modal.type';
declare const Modal: {
    ({ children, isOpen, onAfterOpen, onClose, position }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
    Header: ({ title, showCloseButton }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children }: ModalContentProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children }: ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
};
export default Modal;
