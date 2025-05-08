import {BtnWrapper, Button, Container} from './Content.styles';

interface Props {
  message: string;
  onConfirm?: () => void;
}

const Alert = ({message, onConfirm}: Props) => {
  return (
    <Container>
      {message}
      <BtnWrapper>
        <Button onClick={onConfirm}>확인</Button>
      </BtnWrapper>
    </Container>
  );
};
export default Alert;
