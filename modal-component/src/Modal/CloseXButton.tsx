import styled from 'styled-components';
import useModalContext from './hooks/useModalContext';
import closeIcon from '../assets/close-icon.png';

const CloseButton = () => {
  const modalContext = useModalContext();

  return <CloseIcon onClick={modalContext.onClose} />;
};

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

export default CloseButton;
