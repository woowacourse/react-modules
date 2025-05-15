import styled from '@emotion/styled';
import Modal from '../modal/Modal';

interface AlertModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  handlePrimaryButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  children?: React.ReactNode;
}

function AlertModal({
  title,
  open,
  onClose,
  handlePrimaryButtonClick,
  children,
}: AlertModalProps) {
  return (
    <Modal.Container onClose={onClose} open={open}>
      <Modal.Title>{title}</Modal.Title>
      {children}
      <AlertButtonWrapper>
        <Modal.PrimaryButton label="확인" onClick={handlePrimaryButtonClick} />
      </AlertButtonWrapper>
    </Modal.Container>
  );
}

export default AlertModal;

const AlertButtonWrapper = styled.div`
  width: 80px;
  margin-left: auto;
`;
