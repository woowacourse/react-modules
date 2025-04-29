import styled from 'styled-components';
import closeIcon from './assets/close-icon.png';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const Modal = ({ isOpen = true, title = '제목', onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <BackDrop />
          <ModalLayout>
            <ModalTitle>{title}</ModalTitle>
            <CloseIcon onClick={onClose} />
          </ModalLayout>
        </>
      )}
    </>
  );
};

export default Modal;

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
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  position: relative;
  top: 10px;
  left: 10px;
  text-align: start;
`;
