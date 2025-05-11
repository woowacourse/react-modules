import Modal from '../../Modal.tsx';
import styled from '@emotion/styled';
import { Button } from '../Button';

type AlertModalProps = {
  message: string;
  description?: string;
  onConfirm: () => void;
};

function AlertModal({ message, description, onConfirm }: AlertModalProps) {
  return (
    <Modal
      position="center"
      onClose={onConfirm}
      width="480px"
      height="157px"
    >
      <Message>{message}</Message>
      {description && <Description>{description}</Description>}
      <ButtonContainer>
        <Button variant="confirm" onClick={onConfirm}>확인</Button>
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
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-end;
`;

