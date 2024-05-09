import { PropsWithChildren } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

type PositionType = 'center' | 'bottom';

export interface ModalProps {
  position: PositionType;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalMain({ isOpen, position, children }: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null;

  return createPortal(<div className={`${styles.container} ${styles[position]}`}>{children}</div>, document.body);
}
