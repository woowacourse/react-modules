import { ReactNode } from 'react';
import styles from './Modal.module.css';
import CloseButtonImage from './assets/images/CloseButtonImage.svg';
import { CancelButtonProps, CloseButtonProps, ConfirmButtonProps, SubtitleProps, TitleProps } from './interfaces';

interface ModalProps {
  title?: TitleProps;
  subtitle?: SubtitleProps;
  closeButton: CloseButtonProps;
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
  backgroundColor?: string;
  borderRadius?: string;
  modalPosition: 'center' | 'bottom';
  preventCloseOnOutsideClick?: boolean;
  children: ReactNode;
}

const Modal = ({
  title,
  subtitle,
  closeButton,
  confirmButton,
  cancelButton,
  backgroundColor,
  borderRadius,
  modalPosition,
  preventCloseOnOutsideClick,
  children,
}: ModalProps) => {
  const drawTitleField = () => {
    if (title) {
      if (title.position === 'left') {
        return (
          <div className={styles['title-field']}>
            <h1 className={styles['title']}>{title.content}</h1>
            {subtitle && <h2 className={styles['subtitle']}>{subtitle.content}</h2>}
          </div>
        );
      } else {
        return (
          <div className={styles['title-field']}>
            <h1 style={{ textAlign: 'center' }} className={styles['title']}>
              {title.content}
            </h1>
            {subtitle && (
              <h2 style={{ textAlign: 'center' }} className={styles['subtitle']}>
                {subtitle.content}
              </h2>
            )}
          </div>
        );
      }
    }
  };

  const drawConfirmButton = () => {
    if (confirmButton)
      return (
        <button
          className={styles['button-confirm']}
          style={{
            color: `${confirmButton.fontColor || 'white'}`,
            backgroundColor: `${confirmButton.backgroundColor || 'black'}`,
          }}
          onClick={confirmButton.onConfirm}
        >
          {confirmButton.content}
        </button>
      );
  };

  const drawCancelButton = () => {
    if (cancelButton)
      return (
        <button
          className={styles['button-cancel']}
          style={{
            color: `${cancelButton.fontColor || 'grey'}`,
            backgroundColor: `${cancelButton.backgroundColor || 'lightgrey'}`,
          }}
          onClick={cancelButton.onCancel}
        >
          {cancelButton.content}
        </button>
      );
  };

  return (
    <>
      <div onClick={preventCloseOnOutsideClick ? () => {} : closeButton.onClose} className={styles['backdrop']} />
      <div
        style={{
          backgroundColor: `${backgroundColor || 'white'}`,
          borderRadius: `${borderRadius || '5px'}`,
        }}
        className={styles[`container-${modalPosition}`]}
      >
        <div className={styles['header']}>
          <img className={styles['button-close']} src={CloseButtonImage} onClick={closeButton.onClose}></img>
          {drawTitleField()}
        </div>
        {children}
        <div className={styles['button-container']}>
          {drawCancelButton()}
          {drawConfirmButton()}
        </div>
      </div>
    </>
  );
};

export default Modal;
