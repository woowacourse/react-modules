import styled from 'styled-components';

import { Modal } from '../..';

interface ConfirmModalProps {
  title: string;
  content: string;
  size?: 'small' | 'medium' | 'large';
  onConfirmClick?: () => void;
}

function ConfirmModal({
  title,
  content,
  size,
  onConfirmClick,
}: ConfirmModalProps) {
  return (
    <Modal.Container>
      <Modal.Overlay />
      <Modal.Content position="center" size={size}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{content}</Modal.Body>
        <ButtonWrapper>
          <Modal.ConfirmButton width={80} onClick={onConfirmClick} />
        </ButtonWrapper>
      </Modal.Content>
    </Modal.Container>
  );
}

export default ConfirmModal;

const ButtonWrapper = styled.div`
  margin-top: 22px;
`;
