import { ModalProps } from './Modal';

export interface AlertModalProps extends ModalProps {
    title?: string;
    content: React.ReactNode;
}
declare const AlertModal: React.FC<AlertModalProps>;
export default AlertModal;
