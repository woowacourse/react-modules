import { CSSProperties } from 'react';
import { Modal } from '..';
import { CloseButtonProps, ConfirmButtonProps, SizeProps, SubtitleProps, TitleProps } from './../interfaces';

interface AlertModalProps {
  title: TitleProps;
  subtitle?: SubtitleProps;
  message: string;
  modalPosition: 'center' | 'bottom';
  modalSize: SizeProps;
  closeButton: CloseButtonProps;
  confirmButton: ConfirmButtonProps;
  children?: React.ReactNode;
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
  children,
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
            <Modal.Message content={message} position={title.position || 'center'} />
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

export default AlertModal;
