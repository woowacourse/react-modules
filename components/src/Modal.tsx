import styled from 'styled-components';
import closeIcon from './assets/close-icon.png';

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalLayout = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  z-index: 500;
  background-color: white;
  border-radius: 8px;
`;

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'Close Icon',
})`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Modal = ({ isOpen = true }) => {
  return (
    <>
      {isOpen && (
        <>
          <BackDrop />
          <ModalLayout>
            <CloseIcon />
          </ModalLayout>
        </>
      )}
    </>
  );
};

export default Modal;
