/// <reference types="react" />
export interface ModalProps {
    isOpen: boolean;
    children: JSX.Element;
}
declare const Modal: {
    ({ isOpen, children }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
    BackDrop: ({ onClose }: import('./BackDrop/BackDrop').BackDropProps) => import("react/jsx-runtime").JSX.Element;
    Container: ({ position, size, children }: import('./Container/Container').ContainerProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ children }: import('./Header/Header').HeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ text }: import('./Title/Title').TitleProps) => import("react/jsx-runtime").JSX.Element;
    ButtonContainer: ({ direction, position, children, }: import('./ButtonContainer/ButtonContainer').ButtonContainerProps) => import("react/jsx-runtime").JSX.Element;
    Button: ({ color, size, onClick, children, ...props }: import('./Button/Button').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: ({ onCloseButtonClick }: import('./CloseButton/CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export default Modal;
