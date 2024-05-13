import * as Styled from './ModalContent.style';

export default function ModalContent({ children }: React.PropsWithChildren) {
  return <Styled.Content>{children}</Styled.Content>;
}
