import Modal from '../Modal';
import styled from '@emotion/styled';
import {Button} from "../Button";

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
      <Input type="text" placeholder={placeholder}/>
      <ButtonContainer>
        <Button variant="cancel" onClick={onCancel}>취소</Button>
        <Button variant="confirm" onClick={onConfirm}>확인</Button>
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
