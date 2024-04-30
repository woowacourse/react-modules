import styled from 'styled-components';
import { Direction, Position, Size, BackDropType, ButtonMode } from './Modal.type';

export const ModalLayout = styled.div<{ $position: Position }>`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$position === 'center' ? 'center' : 'flex-end')};

  width: 100vw;
  height: 100vh;
`;

export const ModalBackdrop = styled.div<{ $type: BackDropType }>`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: ${(props) => (props.$type === 'transparent' ? 'transparent' : '#00000050')};
  backdrop-filter: ${(props) => props.$type === 'blur' && 'blur(10px)'};

  z-index: 10;
`;

const controlModalWidth = (position: Position, size: Size) => {
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

export const ModalContainer = styled.div<{ $position: Position; $size: Size }>`
  display: flex;
  flex-direction: column;

  width: ${(props) => controlModalWidth(props.$position, props.$size)};
  max-height: ${(props) => (props.$position === 'center' ? '70vh' : '90vh')};

  margin: ${(props) => props.$position === 'center' && '0 36px'};
  background-color: white;
  padding: 24px 32px;
  border-radius: ${(props) => (props.$position === 'center' ? '8px' : '8px 8px 0 0')};

  z-index: 100;
`;

export const ModalTitleWrapper = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export const ModalButtonWrapper = styled.button<{ $mode: ButtonMode }>`
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
  flex-grow: 1;
  overflow-y: auto;
`;

export const ModalFooterWrapper = styled.footer<{ $direction: Direction }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'row' ? 'row' : 'column')};
`;
