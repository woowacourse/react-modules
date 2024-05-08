import React, { CSSProperties } from 'react';
import {
  CancelButtonProps,
  CloseButtonProps,
  ConfirmButtonProps,
  SizeProps,
  SubtitleProps,
  TitleProps,
} from '../interfaces';
import { Modal } from '..';

interface PromptModalProps {
  title: TitleProps;
  subtitle?: SubtitleProps;
  modalPosition: 'center' | 'bottom';
  modalSize: SizeProps;
  closeButton: CloseButtonProps;
  cancelButton: CancelButtonProps;
  confirmButton: ConfirmButtonProps;
  children?: React.ReactNode;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  preventCloseOnOutsideClick?: boolean;
  buttonsJustifyContent?: CSSProperties['justifyContent'];
}

const PromptModal = ({
  title,
  subtitle,
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
}: PromptModalProps) => {
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
            <Modal.Input onChange={(e) => console.log(e.target.value)} />
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

export default PromptModal;
