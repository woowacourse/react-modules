import { MODAL_POSITION_MAP } from './Modal.constant';
import { ModalPosition } from './Modal.type';

import { convertPascalCase } from '../../utils/string';

import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onToggle: () => void;
  position: ModalPosition;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, isOpen, onToggle, position = 'center' }) => {
  const modalContainerStyle = position === 'bottom' ? `modalContainer${convertPascalCase(position)}` : '';
  return (
    isOpen && (
      <div className={`${styles.modal} ${styles[MODAL_POSITION_MAP[position]]}`}>
        <div className={styles.dimmed} onClick={onToggle} />
        <div className={`${styles.modalContainer} ${styles[modalContainerStyle]}`}>{children}</div>
      </div>
    )
  );
};

export default Modal;
