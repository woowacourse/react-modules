import styled from '@emotion/styled';
import { ModalSize } from './hooks/useModalContext';

const ModalContainer = styled.div``;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const getModalWidth = (size: ModalSize) => {
  switch (size) {
    case 'small':
      return '320px';
    case 'medium':
      return '480px';
    case 'large':
      return '600px';
    default:
      return '480px';
  }
};

const ModalContentContainer = styled.div<{ size: ModalSize }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  z-index: 50;
  max-width: 28rem;
  width: ${({ size }) => getModalWidth(size)};
`;

const StyledButton = styled.div`
  background-color: inherit;
  border: none;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
`;

const StyledDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const FooterContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const CloseButtonContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: #6b7280;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }

  margin-left: auto;
  flex-shrink: 0;
`;

const ModalBody = styled.div`
  margin: 1rem 0;
`;

const TitleContainer = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

export {
  ModalContainer,
  ModalOverlay,
  ModalContentContainer,
  StyledButton,
  HeaderContainer,
  StyledTitle,
  StyledDescription,
  FooterContainer,
  CloseButtonContainer,
  ModalBody,
  TitleContainer,
};
