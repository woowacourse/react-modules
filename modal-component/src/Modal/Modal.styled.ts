import styled from 'styled-components';

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

export { BackDrop, ModalLayout };
