import { ComponentProps } from 'react';
import { Modal } from '../..';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useModal } from '../Modal/ModalProvider';

interface PromptModalProps extends Omit<ComponentProps<'input'>, 'size'> {
  title: string;
  size?: 'small' | 'medium' | 'large';
  alertActionsWidth?: number;
  onCloseClick?: () => void;
  onConfirmClick?: () => void;
}

function PromptModal({
  title,
  size,
  alertActionsWidth,
  onCloseClick,
  onConfirmClick,
  ...props
}: PromptModalProps) {
  const { open } = useModal();
  const modalRef = useFocusTrap(open);

  return (
    <Modal.Container>
      <Modal.Overlay />
      <Modal.Content position="center" size={size} ref={modalRef}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Input {...props} autoFocus />
        <Modal.AlertActions
          width={alertActionsWidth}
          onCancelClick={onCloseClick}
          onConfirmClick={onConfirmClick}
        />
      </Modal.Content>
    </Modal.Container>
  );
}

export default PromptModal;
