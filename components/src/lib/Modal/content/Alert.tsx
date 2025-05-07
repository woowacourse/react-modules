import {Button, Container} from './Alert.styles';

interface Props {
  message: string;
  btnText: string;
  onConfirm?: () => void;
}

const Alert = ({message, btnText, onConfirm}: Props) => {
  return (
    <Container>
      {message}
      <Button onClick={onConfirm}>{btnText}</Button>
    </Container>
  );
};
export default Alert;
