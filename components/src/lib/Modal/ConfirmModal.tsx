import Modal from '../Modal';
import styled from '@emotion/styled';

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
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
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

const CancelButton = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 15px;
    background-color: #ffffff;
    color: #333333BF;
    border: 1px solid #33333340;

    &:hover {
        background-color: rgba(206, 206, 206, 0.6);
    }
`;

const ConfirmButton = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 5px;
    background-color: #333333;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;

    &:hover {
        background-color: rgba(28, 28, 28, 0.6);
    }
`;
