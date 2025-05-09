import { ComponentProps } from 'react';
import { Modal } from '.';

interface PromptModalProps extends Omit<ComponentProps<'input'>, 'size'> {
  isOpen: boolean;
  title: string;
  onCloseClick: () => void;
  onConfirmClick: () => void;
  size?: 'small' | 'medium' | 'large';
  alertActionsWidth?: number;
}

function PromptModal({
  isOpen,
  title,
  onCloseClick,
  onConfirmClick,
  size,
  alertActionsWidth,
  ...props
}: PromptModalProps) {
  return (
    <>
      <Modal isOpen={isOpen}>
        <Modal.Overlay onClick={onCloseClick} />
        <Modal.Content position="center" size={size}>
          <Modal.Title>{title}</Modal.Title>
          <Modal.Input {...props} />
          <Modal.AlertActions
            width={alertActionsWidth}
            onCancelClick={onCloseClick}
            onConfirmClick={onConfirmClick}
          />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default PromptModal;
