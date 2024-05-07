import styles from './ModalFooter.module.css';
import { CancelButtonProps, ConfirmButtonProps } from '../interfaces';
import { Modal } from '..';

interface ModalFooterProps {
  cancelButton?: CancelButtonProps;
  confirmButton?: ConfirmButtonProps;
  buttonsDirection?: 'row' | 'column';
}

const ModalFooter = ({ cancelButton, confirmButton, buttonsDirection }: ModalFooterProps) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: `${buttonsDirection || 'row'}` }}
      className={styles['button-container']}
    >
      {confirmButton && <Modal.ConfirmButton {...confirmButton} />}
      {cancelButton && <Modal.CancelButton {...cancelButton} />}
    </div>
  );
};

export default ModalFooter;
