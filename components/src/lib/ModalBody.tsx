import React from 'react';
import styled from 'styled-components';

interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  return <StyledModalBody>{children}</StyledModalBody>;
}

const StyledModalBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ModalBody;
