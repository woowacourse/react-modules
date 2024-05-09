import React, { CSSProperties } from 'react';
import {
  CancelButtonProps,
  CloseButtonProps,
  ConfirmButtonProps,
  ModalSizeProps,
  SubtitleProps,
  TitleProps,
} from '../interfaces';
import Modal from '../Modal/Modal';
import ModalMessage from '../ModalMessage/ModalMessage';

interface ConfirmModalProps {
  title: TitleProps;
  subtitle?: SubtitleProps;
  message: string;
  modalPosition: 'center' | 'bottom';
  modalSize: ModalSizeProps;
  closeButton: CloseButtonProps;
  cancelButton: CancelButtonProps;
  confirmButton: ConfirmButtonProps;
  children?: React.ReactNode;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  preventCloseOnOutsideClick?: boolean;
  buttonsJustifyContent?: CSSProperties['justifyContent'];
}

const ConfirmModal = ({
  title,
  subtitle,
  message,
  modalPosition,
  modalSize,
  closeButton,
  cancelButton,
  confirmButton,
  children,
  backgroundColor,
  borderRadius,
  preventCloseOnOutsideClick,
  buttonsJustifyContent,
}: ConfirmModalProps) => {
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
        cancelButton: {
          ...cancelButton,
          buttonSize: cancelButton.buttonSize || {
            width: '80px',
            height: '36px',
          },
        },
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
            {children}
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

export default ConfirmModal;
