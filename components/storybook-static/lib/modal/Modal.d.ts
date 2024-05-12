import { HTMLAttributes, CSSProperties, ButtonHTMLAttributes } from '../../../node_modules/react';

export interface ModalProps extends React.PropsWithChildren {
    children?: React.ReactNode;
    isOpen: boolean;
    size: "S" | "M" | "L";
    position: "top" | "bottom" | "center";
    onClose: () => void;
    style?: CSSProperties;
}
declare const Modal: React.FC<ModalProps> & {
    ModalHeader: ModalHeaderType;
    ModalTitle: ModalTitleType;
    ModalCloseButton: ModalCloseButtonType;
    ModalButton: ModalButtonType;
    ModalContent: ModalContentType;
    ModalInputLabel: ModalInputLabelType;
    ModalInput: ModalInputType;
    ModalFooter: ModalFooterType;
};
type ModalHeaderType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalTitleType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>;
type ModalCloseButtonType = React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
type ModalButtonType = React.FC<ButtonHTMLAttributes<HTMLButtonElement> & {
    size: "S" | "M" | "L";
}>;
type ModalContentType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement>>>;
type ModalInputLabelType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLLabelElement> & {
    htmlFor?: string;
}>>;
type ModalInputType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement> & {
    type: HTMLInputElement["type"];
    placeholder?: string;
}>>;
type ModalFooterType = React.FC<React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;
export default Modal;
