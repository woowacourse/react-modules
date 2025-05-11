import Modal from '../Modal';
import styled from '@emotion/styled';

type AlertModalProps = {
  message: string;
  description?: string;
  onConfirm: () => void;
  size?: 'sm' | 'md' | 'lg';
};

function AlertModal({message, description, onConfirm, size = 'md'}: AlertModalProps) {
  return (
    <Modal position="center" size={size} onClose={onConfirm}>
      <Message>{message}</Message>
      <Description>{description}</Description>
      <ButtonContainer>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
}

export default AlertModal;

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
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;
`;

const ConfirmButton = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 5px;
    left: 336px;
    background-color: #333333;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;

    &:hover {
        background-color: rgba(51, 51, 51, 0.6);
    }
`;
