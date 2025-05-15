import styled from '@emotion/styled';
import Modal from '../modal/Modal';

interface ConfirmModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  handlePrimaryButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  children?: React.ReactNode;
}

function ConfirmModal({
  title,
  open,
  onClose,
  handlePrimaryButtonClick,
  children,
}: ConfirmModalProps) {
  return (
    <Modal.Container onClose={onClose} open={open}>
      <Modal.Title>{title}</Modal.Title>
      {children}
      <ButtonRowWrapper>
        <Modal.SecondaryButton label="취소" onClick={onClose} />
        <Modal.PrimaryButton label="확인" onClick={handlePrimaryButtonClick} />
      </ButtonRowWrapper>
    </Modal.Container>
  );
}

export default ConfirmModal;

export const ButtonRowWrapper = styled.div`
  width: 160px;
  margin-left: auto;

  display: flex;
  gap: 12px;
`;
