import Modal from '../Modal';
import styled from '@emotion/styled';
import {Button} from "../Button";

type ConfirmModalProps = {
  message: string;
  description?: string;
  onCancel: () => void;
  onConfirm: () => void;
  size?: 'sm' | 'md' | 'lg';
};

function ConfirmModal({message, description, onCancel, onConfirm, size = 'md'}: ConfirmModalProps) {
  return (
    <Modal position="center" size={size} onClose={onConfirm}>
      <Message>{message}</Message>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button variant="cancel" onClick={onCancel}>취소</Button>
        <Button variant="confirm" onClick={onConfirm}>확인</Button>
      </ButtonContainer>
    </Modal>
  );
}

export default ConfirmModal;

const Message = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    vertical-align: middle;
`;

const Description = styled.p`
    margin: 16px 0 16px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    vertical-align: middle;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-end;
    gap: 12px;
`;
