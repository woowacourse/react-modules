import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function ModalBody({ children }: Props) {
  return <ContentWrapper>{children}</ContentWrapper>;
}

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export default ModalBody;
