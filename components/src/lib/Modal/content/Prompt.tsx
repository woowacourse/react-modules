import {useState} from 'react';
import {
  BtnWrapper,
  Button,
  CancelButton,
  Container,
  Input,
} from './Content.styles';

interface Props {
  message?: string;
  onConfirm?: (value?: string) => void;
  onClose?: () => void;
}

const Prompt = ({message, onConfirm, onClose}: Props) => {
  const [input, setInput] = useState('');

  return (
    <Container>
      {message}
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <BtnWrapper>
        <CancelButton onClick={onClose}>취소</CancelButton>
        <Button onClick={() => onConfirm?.(input)}>확인</Button>
      </BtnWrapper>
    </Container>
  );
};
export default Prompt;
