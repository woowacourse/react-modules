import styles from './ModalFooter.module.css';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import { CancelButtonProps, ConfirmButtonProps } from './interfaces';

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
      {confirmButton && <ConfirmButton {...confirmButton} />}
      {cancelButton && <CancelButton {...cancelButton} />}
    </div>
  );
};

export default ModalFooter;
