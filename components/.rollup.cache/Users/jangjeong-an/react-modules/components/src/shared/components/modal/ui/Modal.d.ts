import { PropsWithChildren } from 'react';
export interface ModalProps extends PropsWithChildren {
    closeModal: () => void;
    position?: 'center' | 'bottom';
    maxWidth?: number;
    title?: string;
    isVisibleCloseButton?: boolean;
}
declare function Modal(props: ModalProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map