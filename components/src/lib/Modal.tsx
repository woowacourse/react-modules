import { ReactNode } from 'react';
import styles from './Modal.module.css';
import { CloseButtonImage } from './CloseButtonImage';
import { CancelButtonProps, CloseButtonProps, ConfirmButtonProps, SubtitleProps, TitleProps } from './interfaces';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';

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
            <h1
              style={{ fontSize: title.fontSize || '18px', color: title.color || 'black' }}
              className={styles['title']}
            >
              {title.content}
            </h1>
            {subtitle && (
              <h2
                style={{ fontSize: subtitle.fontSize || '12px', color: subtitle.color || 'grey' }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </h2>
            )}
          </div>
        );
      } else {
        return (
          <div className={styles['title-field']}>
            <h1
              style={{ textAlign: 'center', color: title.color || 'black', fontSize: title.fontSize || '18px' }}
              className={styles['title']}
            >
              {title.content}
            </h1>
            {subtitle && (
              <h2
                style={{ textAlign: 'center', color: subtitle.color || 'grey', fontSize: subtitle.fontSize || '12px' }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </h2>
            )}
          </div>
        );
      }
    }
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
          <span className={styles['button-close']} onClick={closeButton.onClose}>
            <CloseButtonImage />
          </span>
          {drawTitleField()}
        </div>
        {children}
        <div className={styles['button-container']}>
          {cancelButton && <CancelButton {...cancelButton} />}
          {confirmButton && <ConfirmButton {...confirmButton} />}
        </div>
      </div>
    </>
  );
};

export default Modal;
