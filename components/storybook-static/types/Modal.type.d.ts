import { ReactNode } from '../../../node_modules/react';
export type Position = 'center' | 'bottom';
export type ModalContextType = {
    onClose: () => void;
    position: Position;
};
export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    position: Position;
    onClose: () => void;
    onAfterOpen?: () => void;
}
export interface ModalContentProps {
    children?: ReactNode;
}
export interface ModalFooterProps {
    children?: ReactNode;
}
export interface ModalHeaderProps {
    title?: string;
    showCloseButton?: boolean;
}
