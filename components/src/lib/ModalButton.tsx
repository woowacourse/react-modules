import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonStyle = styled.button`
  background-color: var(--button-background-color);
  color: var(--white-color);
  width: 8rem;
  height: 3.6rem;
  border-radius: 0.5rem;
`;

interface ModalButtonType {
  handleCloseButton: () => void;
}

function ModalButton({ handleCloseButton }: ModalButtonType) {
  return (
    <ButtonContainer>
      <ButtonStyle onClick={handleCloseButton}>확인</ButtonStyle>
    </ButtonContainer>
  );
}

export default ModalButton;
