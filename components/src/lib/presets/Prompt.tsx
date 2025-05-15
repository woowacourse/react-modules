import styled from '@emotion/styled';
import Modal from '../modal/Modal';

interface PromptModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  handlePrimaryButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

function PromptModal({
  title,
  open,
  onClose,
  handlePrimaryButtonClick,
  inputValue,
  onInputChange,
  children,
}: PromptModalProps) {
  return (
    <Modal.Container onClose={onClose} open={open}>
      <Modal.Title>{title}</Modal.Title>
      {children}
      <Modal.Input inputValue={inputValue} onInputChange={onInputChange} />
      <ButtonRowWrapper>
        <Modal.SecondaryButton label="취소" onClick={onClose} />
        <Modal.PrimaryButton label="확인" onClick={handlePrimaryButtonClick} />
      </ButtonRowWrapper>
    </Modal.Container>
  );
}

export default PromptModal;

export const ButtonRowWrapper = styled.div`
  width: 160px;
  margin-left: auto;

  display: flex;
  gap: 12px;
`;
