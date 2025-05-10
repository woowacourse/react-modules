import styled from 'styled-components';
import closeIcon from '../assets/close-icon.png';
import { get } from 'http';

type PositionProps = {
  $position: 'center' | 'bottom';
};
type SizeProps = {
  $size: 'small' | 'medium' | 'large';
};
const BackDrop = styled.div<PositionProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $position }) =>
    $position === 'center' ? 'center' : 'flex-end'};
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalLayout = styled.div<PositionProps & SizeProps>`
  position: relative;
  width: ${({ $position, $size }) =>
    $position === 'bottom' ? '100%' : getModalWidth($size)};
  z-index: 500;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

function getModalWidth(size: 'small' | 'medium' | 'large') {
  switch (size) {
    case 'small':
      return '320px';
    case 'medium':
      return '480px';
    case 'large':
      return '600px';
    default:
      return '100%';
  }
}

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'Close Icon',
  role: 'button',
  tabIndex: 0,
})`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;

  &:focus {
    outline: 2px solid #000; // 포커스 시 시각적 표시
  }
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: start;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

type ModalButtonContainerProps = {
  $position: 'left' | 'right' | 'center';
};

const ModalButtonContainer = styled.div<ModalButtonContainerProps>`
  display: flex;
  justify-content: ${({ $position }) => getButtonPosition($position)};
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

type ModalButtonProps = {
  $backgroundColor: string;
  $textColor: string;
  $size: 'small' | 'medium' | 'large';
  $border: string;
};

const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#ffffff'};
  color: ${({ $textColor }) => $textColor || '#000000'};
  width: ${({ $size }) => getSize($size)};
  color: white;
  border: ${({ $border }) => $border || 'none'};
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:focus {
    border: none;
    outline: none;
  }
`;

function getSize(size: 'small' | 'medium' | 'large') {
  switch (size) {
    case 'small':
      return '80px';
    case 'medium':
      return '120px';
    case 'large':
      return '300px';
    default:
      return '100%';
  }
}

function getButtonPosition($position: 'left' | 'right' | 'center') {
  switch ($position) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'center';
  }
}

const ModalInput = styled.input`
  padding: 10px;
  min-height: 20px;
`;

export {
  BackDrop,
  ModalLayout,
  CloseIcon,
  ModalTitle,
  ModalContents,
  ModalButtonContainer,
  ModalButton,
  ModalInput,
};
