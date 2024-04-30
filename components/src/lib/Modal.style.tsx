import styled from 'styled-components';

export const ModalLayout = styled.div<{ $position: string }>`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$position === 'center' ? 'center' : 'flex-end')};

  width: 100vw;
  height: 100vh;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: #00000050;
  z-index: 10;
`;

const controlModalWidth = (position: string, size: string) => {
  if (position === 'bottom') return '100%';

  switch (size) {
    case 'sm':
      return '33.33%';
    case 'md':
      return '66.66%';
    case 'lg':
      return '100%';
    default:
      return '100%';
  }
};

export const ModalContainer = styled.div<{ $position: string; $size: string }>`
  width: ${(props) => controlModalWidth(props.$position, props.$size)};
  margin: ${(props) => props.$position === 'center' && '0 36px'};
  background-color: white;
  padding: 24px 32px;
  border-radius: ${(props) => (props.$position === 'center' ? '8px' : '8px 8px 0 0')};

  max-height: ${(props) => (props.$position === 'center' ? '50vh' : '90vh')};
  overflow-y: auto;

  z-index: 100;
`;

export const ModalTitleWrapper = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const ModalButtonWrapper = styled.button<{ $mode: string }>`
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => (props.$mode === 'primary' ? '#333333' : '#ffffff')};
  color: ${(props) => (props.$mode === 'primary' ? 'white' : '#8B95A1')};

  border: none;
  border-radius: 5px;

  text-align: center;

  font-weight: 700;
  font-size: 14px;
`;

export const ModalCloseButtonWrapper = styled.button`
  background: none;
  border: none;
`;

export const ModalHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ModalBodyWrapper = styled.main`
  margin: 16px 0px;
`;
