import React from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  children: React.ReactNode;
}

function ButtonContainer({ children }: ButtonContainerProps) {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
}

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default ButtonContainer;
