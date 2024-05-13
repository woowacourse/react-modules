import { CSSProperties } from 'react';
import {
  CancelButtonProps,
  CloseButtonProps,
  ConfirmButtonProps,
  ModalSizeProps,
  SubtitleProps,
  TitleProps,
} from '../interfaces';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

interface PromptModalProps {
  title: TitleProps;
  subtitle?: SubtitleProps;
  modalPosition: 'center' | 'bottom';
  modalSize: ModalSizeProps;
  closeButton: Omit<CloseButtonProps, 'display'>;
  cancelButton: CancelButtonProps;
  confirmButton: ConfirmButtonProps;
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
            <Input onChange={(e) => console.log(e.target.value)} />
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
