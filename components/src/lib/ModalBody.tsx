import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }: ModalBodyProps) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export default ModalBody;
