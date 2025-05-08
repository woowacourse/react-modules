import {Button, Container} from './Alert.styles';

interface Props {
  message: string;
  onConfirm?: () => void;
}

const Alert = ({message, onConfirm}: Props) => {
  return (
    <Container>
      {message}
      <Button onClick={onConfirm}>확인</Button>
    </Container>
  );
};
export default Alert;
