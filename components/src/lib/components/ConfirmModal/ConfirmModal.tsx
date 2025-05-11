import styled from 'styled-components';

import { Modal } from '../..';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onConfirmClick: () => void;
  size?: 'small' | 'medium' | 'large';
}

function ConfirmModal({
  isOpen,
  title,
  content,
  onConfirmClick,
  size,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Overlay onClick={onConfirmClick} />
      <Modal.Content position="center" size={size}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{content}</Modal.Body>
        <ButtonWrapper>
          <Modal.ConfirmButton width={80} onClick={onConfirmClick} />
        </ButtonWrapper>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;

const ButtonWrapper = styled.div`
  margin-top: 22px;
`;
