import {BtnWrapper, Container, Button, CancelButton} from './Content.styles';

interface Props {
  message: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

const Confirm = ({message, onConfirm, onClose}: Props) => {
  return (
    <Container>
      {message}
      <BtnWrapper>
        <CancelButton onClick={onClose}>취소</CancelButton>
        <Button onClick={onConfirm}>확인</Button>
      </BtnWrapper>
    </Container>
  );
};

export default Confirm;
