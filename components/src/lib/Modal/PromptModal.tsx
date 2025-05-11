import Modal from '../Modal';
import styled from '@emotion/styled';

type PromptModalProps = {
  message: string;
  placeholder?: string;
  onCancel: () => void;
  onConfirm: () => void;
  size?: 'sm' | 'md' | 'lg';
};

function PromptModal({message, placeholder, onCancel, onConfirm, size = 'md'}: PromptModalProps) {
  return (
    <Modal position="center" size={size} onClose={onConfirm}>
      <Message>{message}</Message>
      {/* input 추가 */}
      <Input type="text" placeholder={placeholder} />
      <ButtonContainer>
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
}

export default PromptModal;

const Message = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    vertical-align: middle;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    border-radius: 2px;
    gap: 8px;
    padding: 8px;
    margin: 16px 0 16px 0;
    border: 1.01px solid #000000;
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
