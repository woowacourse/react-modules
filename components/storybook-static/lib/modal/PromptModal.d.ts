import { default as React } from '../../../node_modules/react';
import { ModalProps } from './Modal';

export interface PromptModalProps extends ModalProps {
    labelText: string[];
    inputType: string[];
    htmlFor: string[];
}
declare const AlertModal: React.FC<PromptModalProps>;
export default AlertModal;
