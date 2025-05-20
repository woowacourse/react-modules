import styled from 'styled-components';

type PositionProps = {
  $position: 'center' | 'bottom';
};

type SizeProps = {
  $size: 'small' | 'medium' | 'large' | string;
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
    $position === 'bottom' ? '100%' : sizeMap[$size] || $size};
  z-index: 500;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const sizeMap = {
  small: '320px',
  medium: '480px',
  large: '600px',
};
\

export { BackDrop, ModalLayout };
