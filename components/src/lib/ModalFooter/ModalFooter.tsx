import styles from './ModalFooter.module.css';
import { CancelButtonProps, ConfirmButtonProps } from '../interfaces';
import { CSSProperties } from 'react';
import CancelButton from '../CancelButton/CancelButton';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

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
        justifyContent: `${buttonsJustifyContent || 'center'}`,
      }}
      className={styles['button-container']}
    >
      {cancelButton && <CancelButton {...cancelButton} />}
      {confirmButton && <ConfirmButton {...confirmButton} />}
    </div>
  );
};

export default ModalFooter;
