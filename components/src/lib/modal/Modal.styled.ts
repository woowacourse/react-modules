import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div<{
  $position: 'top' | 'center' | 'bottom';
}>`
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

  ${({ $position }) => {
    switch ($position) {
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
  backgroudColor?: string;
  color?: string;
}

export const ModalTextButton = styled.button<ModalTextButtonProps>`
  width: ${({ buttonSize }) => buttonSize || '100%'};
  padding: 10px;
  border: none;
  border-radius: 0;
  &:focus {
    outline: none;
  }
  color: #ffffff;
  background-color: #333333;
  font-size: ${({ fontSize }) => fontSize || '15px'};
`;

interface ModalContentProps {
  fontSize?: string;
}

export const ModalContent = styled.section<ModalContentProps>`
  font-size: ${({ fontSize }) => fontSize || '15px'};
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
