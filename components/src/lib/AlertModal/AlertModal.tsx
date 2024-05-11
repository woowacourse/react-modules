import { CSSProperties } from 'react';
import { CloseButtonProps, ConfirmButtonProps, ModalSizeProps, SubtitleProps, TitleProps } from './../interfaces';
import Modal from '../Modal/Modal';
import ModalMessage from '../ModalMessage/ModalMessage';

interface AlertModalProps {
  title: TitleProps;
  subtitle?: SubtitleProps;
  message: string;
  modalPosition: 'center' | 'bottom';
  modalSize: ModalSizeProps;
  closeButton: CloseButtonProps;
  confirmButton: ConfirmButtonProps;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  preventCloseOnOutsideClick?: boolean;
  buttonsJustifyContent?: CSSProperties['justifyContent'];
}

const AlertModal = ({
  title,
  subtitle,
  message,
  modalPosition,
  modalSize,
  closeButton,
  confirmButton,
  backgroundColor,
  borderRadius,
  preventCloseOnOutsideClick,
  buttonsJustifyContent,
}: AlertModalProps) => {
  return (
    <Modal
      modalHeader={{
        title,
        subtitle,
        closeButton: {
          ...closeButton,
          display: false,
        },
      }}
      modalFooter={{
        confirmButton: {
          ...confirmButton,
          buttonSize: confirmButton.buttonSize || {
            width: '80px',
            height: '36px',
          },
        },
        buttonsJustifyContent: buttonsJustifyContent || 'flex-end',
      }}
      modalContent={{
        children: (
          <>
            <ModalMessage content={message} position={title.position || 'center'} />
          </>
        ),
      }}
      modalPosition={modalPosition}
      modalSize={modalSize}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      preventCloseOnOutsideClick={preventCloseOnOutsideClick}
    />
  );
};

export default AlertModal;
