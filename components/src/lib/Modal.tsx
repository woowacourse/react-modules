import CompoundModal, { CompoundModalProps } from './CompoundModal';

import { ModalPosition } from './types/type';
import { useEffect } from 'react';

interface ModalProps extends CompoundModalProps {
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  buttonText?: string;
  hasCloseButton?: boolean;
  position?: ModalPosition;
}

export default function Modal({
  onClose,
  onConfirm,
  title,
  buttonText,
  children,
  hasCloseButton = true,
  size = 'medium',
  position = 'center',
}: ModalProps) {
  useEffect(() => {
    const handleModalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleModalKeyDown);
  }, [onClose]);
  const titleBarChildren = [];
  if (title)
    titleBarChildren.push(
      <CompoundModal.title key={'title'}>{title}</CompoundModal.title>
    );
  if (hasCloseButton)
    titleBarChildren.push(<CompoundModal.closeButton key={'closeButton'} />);

  return (
    <CompoundModal position={position} size={size}>
      {titleBarChildren.length > 0 && (
        <CompoundModal.titleBar>{titleBarChildren}</CompoundModal.titleBar>
      )}
      {children}
      {buttonText && (
        <CompoundModal.button
          buttonTheme='primary'
          onClick={onConfirm ?? onClose}
        >
          {buttonText}
        </CompoundModal.button>
      )}
    </CompoundModal>
  );
}
