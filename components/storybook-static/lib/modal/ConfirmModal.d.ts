import { ModalProps } from './Modal';

export interface ConfirmModalProps extends ModalProps {
    title?: string;
    content: React.ReactNode;
    onConfirm: () => void;
}
declare const ConfirmModal: React.FC<ConfirmModalProps>;
export default ConfirmModal;
