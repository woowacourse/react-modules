import styled from 'styled-components';
import closeIcon from '../assets/close-icon.png';

type PositionProps = {
  $position: 'center' | 'bottom';
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

const ModalLayout = styled.div<PositionProps>`
  position: relative;
  width: ${({ $position }) => ($position === 'bottom' ? '100%' : '500px')};
  min-width: 500px;
  min-height: 500px;
  z-index: 500;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'Close Icon',
})`
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
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
  margin-top: 56px;
  height: 100%;
`;

export { BackDrop, ModalLayout, CloseIcon, ModalTitle, ModalContents };
