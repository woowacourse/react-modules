import styled from 'styled-components';

interface ModalContentProps {
  children: React.ReactNode;
}

export default function ModalContent({ children }: ModalContentProps) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  max-width: 100vw;
  max-height: 70vh;
  overflow-y: auto;
  text-align: start;
`;
