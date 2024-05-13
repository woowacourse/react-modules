import { MouseEvent } from 'react';
import { Modal } from '..';
import { SizeType } from '../Modal/Content/Content';
import { ModalProps } from '../Modal/ModalContainer';

export interface AlertModalProps extends ModalProps {
  size?: SizeType;
  title: string;
  label: string;
  existCloseButton: boolean;
  onConfirm: (e: MouseEvent<HTMLButtonElement>) => boolean;
}

export default function AlertModal({ size = 'medium', title, label, position, isOpen, onClose, onConfirm, existCloseButton }: AlertModalProps) {
  const onConfirmHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const response = onConfirm(e);

    if (response) onClose();
  };

  return (
    <Modal position={position} isOpen={isOpen} onClose={onClose}>
      <Modal.Backdrop onClick={onClose} />
      <Modal.Content size={size}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          {existCloseButton && <Modal.CloseButton onClick={onClose} />}
        </Modal.Header>
        <Modal.Main>
          <Modal.Label color='basic'>{label}</Modal.Label>
        </Modal.Main>
        <Modal.Footer align='row' position='right'>
          <Modal.Button backgroundColor='primary' onClick={onConfirmHandler} size={position === 'bottom' ? 'full' : 'small'}>
            확인
          </Modal.Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
