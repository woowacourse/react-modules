import styled from 'styled-components';
import { ModalProps } from './Modal';

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div<
  Pick<ModalProps, 'position' | 'size'>
>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  height: fit-content;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 24px 32px 24px 32px;
  background-color: white;
  box-sizing: border-box;
  border: none;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          top: 0;
          transform: translate(-50%, 0%);
        `;
      case 'bottom':
        return `
          bottom: 0;
          transform: translate(-50%, 0%);
        `;
      case 'center':
        return `
          top: 50%;
          transform: translate(-50%, -50%);
        `;
      default:
        return `
          top: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          width: 320px;
        `;
      case 'medium':
        return `
          width: 480px;
        `;
      case 'large':
        return `
          width: 600px;
        `;
      default:
        return `
        width: 480px;
      `;
    }
  }}
`;

export const ModalHeader = styled.header`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

interface ModalTitleProps {
  fontSize?: string;
  fontWeight?: string;
}

export const ModalTitle = styled.span<ModalTitleProps>`
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-weight: 700;
`;

export const ModalIconButton = styled.button<{ imgSize?: string }>`
  padding: 0;
  border: none;
  &:focus {
    outline: none;
  }
  img {
    width: ${({ imgSize }) => imgSize || '16px'};
  }
`;

interface ModalTextButtonProps {
  buttonSize?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
}

export const ModalTextButton = styled.button<ModalTextButtonProps>`
  width: ${({ buttonSize }) => buttonSize || '100%'};
  padding: 10px;
  border: none;
  border-radius: 0;
  &:focus {
    outline: none;
  }
  color: ${({ fontColor }) => fontColor || '#ffffff'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#333333'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  border: 1px solid #333333;
`;

interface ModalContentProps {
  fontSize?: string;
}

export const ModalContent = styled.section<ModalContentProps>`
  font-size: ${({ fontSize }) => fontSize || '15px'};
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #000000;
`;

interface ModalFooterProps {
  buttonPosition?: 'left' | 'center' | 'right';
  buttonGap?: string;
}

export const ModalFooter = styled.div<ModalFooterProps>`
  display: flex;
  justify-content: ${({ buttonPosition }) => buttonPosition || 'center'};
  gap: ${({ buttonGap }) => buttonGap || '12px'};
`;
