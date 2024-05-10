import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const ButtonStyle = styled.button`
  background-color: var(--button-background-color);
  color: var(--white-color);
  width: 8rem;
  height: 3.6rem;
  border-radius: 0.5rem;
  border: none;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: center;
`;

const WhiteButtonStyle = styled(ButtonStyle)`
  background-color: transparent;
  border: 1px solid var(--button-gray-color);
  color: var(--button-gray-color);
`;

interface ModalButtonType {
  category: 'alert' | 'confirm' | 'prompt';
  handleCloseButton: () => void;
  onConfirm?: () => void;
}

function ModalButton({
  category,
  handleCloseButton,
  onConfirm,
}: ModalButtonType) {
  const handleModalButton = () => {
    if (category === 'alert') {
      return handleCloseButton();
    }
    onConfirm && onConfirm();
    handleCloseButton();
  };

  return (
    <ButtonContainer>
      {(category === 'confirm' || category === 'prompt') && (
        <WhiteButtonStyle onClick={handleModalButton}>취소</WhiteButtonStyle>
      )}
      <ButtonStyle onClick={handleModalButton}>확인</ButtonStyle>
    </ButtonContainer>
  );
}

export default ModalButton;
