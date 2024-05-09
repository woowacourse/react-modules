import { PropsWithChildren } from 'react';
import { Modal } from '../..';
import { ModalProps } from '../ModalContainer';
import { SizeType } from '../Content/Content';

interface PromptModalProps extends ModalProps {
  size?: SizeType;
  existCloseButton: boolean;
  title: string;
  onConfirm: () => void;
}

export default function PromptModal({ size = 'medium', existCloseButton, title, onConfirm, children, ...props }: PropsWithChildren<PromptModalProps>) {
  const { isOpen, position, onClose } = props;

  const onConfirmHandler = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal position={position} isOpen={isOpen} onClose={onClose}>
      <Modal.Backdrop onClick={onClose} />
      <Modal.Content size={size}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          {existCloseButton && <Modal.CloseButton onClick={onClose} />}
        </Modal.Header>
        <Modal.Main>{children}</Modal.Main>
        <Modal.Footer align='row' position='right'>
          <Modal.Button backgroundColor='secondary' onClick={onConfirmHandler} size='small'>
            취소
          </Modal.Button>
          <Modal.Button backgroundColor='primary' onClick={onConfirmHandler} size='small'>
            확인
          </Modal.Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
