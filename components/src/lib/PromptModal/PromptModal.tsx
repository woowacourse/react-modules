import { MouseEvent, PropsWithChildren } from 'react';
import { Modal } from '..';
import { ModalProps } from '../Modal/ModalContainer';
import { SizeType } from '../Modal/Content/Content';

interface PromptModalProps extends ModalProps {
  size?: SizeType;
  existCloseButton: boolean;
  title: string;
  onConfirm: (e: MouseEvent<HTMLButtonElement>) => boolean;
}

export default function PromptModal({ size = 'medium', existCloseButton, title, onConfirm, children, ...props }: PropsWithChildren<PromptModalProps>) {
  const { isOpen, position, onClose } = props;

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
        <Modal.Main>{children}</Modal.Main>
        {position === 'center' && (
          <Modal.Footer align='row' position='right'>
            <Modal.Button backgroundColor='secondary' onClick={onConfirmHandler} size='small'>
              취소
            </Modal.Button>
            <Modal.Button backgroundColor='primary' onClick={onConfirmHandler} size='small'>
              확인
            </Modal.Button>
          </Modal.Footer>
        )}
        {position === 'bottom' && (
          <Modal.Footer align='column' position='right'>
            <Modal.Button backgroundColor='primary' onClick={onConfirmHandler} size='full'>
              확인
            </Modal.Button>
            <Modal.Button backgroundColor='secondary' onClick={onConfirmHandler} size='full'>
              취소
            </Modal.Button>
          </Modal.Footer>
        )}
      </Modal.Content>
    </Modal>
  );
}
