import * as Styled from './ModalContent.style';

interface ModalContentProps {
  children: React.ReactNode;
}

export default function ModalContent({ children }: ModalContentProps) {
  return <Styled.Content>{children}</Styled.Content>;
}
