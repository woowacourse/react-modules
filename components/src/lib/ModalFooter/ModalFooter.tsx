import styles from './ModalFooter.module.css';
import { CancelButtonProps, ConfirmButtonProps } from '../interfaces';
import { Modal } from '..';
import { CSSProperties } from 'react';

export interface ModalFooterProps {
  cancelButton?: CancelButtonProps;
  confirmButton?: ConfirmButtonProps;
  buttonsDirection?: 'row' | 'column';
  buttonsJustifyContent?: CSSProperties['justifyContent'];
}

const ModalFooter = ({ cancelButton, confirmButton, buttonsDirection, buttonsJustifyContent }: ModalFooterProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `${buttonsDirection || 'row'}`,
        justifyContent: `${buttonsJustifyContent}`,
      }}
      className={styles['button-container']}
    >
      {confirmButton && <Modal.ConfirmButton {...confirmButton} />}
      {cancelButton && <Modal.CancelButton {...cancelButton} />}
    </div>
  );
};

export default ModalFooter;
