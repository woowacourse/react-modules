import styled from 'styled-components';

export const ModalLayout = styled.div<{ $position: string }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$position === 'center' ? 'center' : 'flex-end')};

  width: 100vw;
  height: 100vh;

  background: #00000050;
`;

export const ModalContainer = styled.div<{ $position: string }>`
  width: 100%;
  margin: ${(props) => props.$position === 'center' && '0 36px'};
  background-color: white;
  padding: 24px 32px;
  border-radius: ${(props) => (props.$position === 'center' ? '8px' : '8px 8px 0 0')};

  max-height: ${(props) => (props.$position === 'center' ? '50vh' : '90vh')};
  overflow-y: auto;
`;

export const ModalTitleWrapper = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const ModalButton = styled.button<{ $mode: string }>`
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => (props.$mode === 'primary' ? '#333333' : '#ffffff')};
  color: ${(props) => (props.$mode === 'primary' ? 'white' : '#8B95A1')};
  border-radius: 5px;

  text-align: center;

  font-weight: 700;
  font-size: 14px;
`;
