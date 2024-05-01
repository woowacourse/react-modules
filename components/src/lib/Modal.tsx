import styled from 'styled-components';
import ModalBox from './ModalBox';
import { ReactNode } from 'react';

interface Props {
  position?: string;
  title: string;
  isXButton?: boolean;
  buttonLayout?: string;
  children?: ReactNode;

  closeButtonContent?: string;
  confirmButton?: string;
  confirmButtonContent?: string;

  xButtonContent?:string;

  handleConfirm: (e: React.MouseEvent) => void;
  handleClose: (e: React.MouseEvent) => void;
}
const Modal = ({
  position,
  title,
  isXButton = true,
  buttonLayout = 'row',
  closeButtonContent,
  confirmButtonContent = '확인',
  handleConfirm,
  handleClose,
  children,
  xButtonContent
}: Props) => {

  // const [modalOpen, setModalOpen] = useState(true);
  // const closeModal = (e: React.MouseEvent) => {
  //   setModalOpen(false);
  //   handleClose && handleClose(e);
  // };

  const clickBackDrop = (e: React.MouseEvent) => {
    return e.currentTarget === e.target;
  };

  return (
    <>
      {(
        <ModalContainer
          $position={position === 'bottom' ? 'flex-end' : 'center'}
          onClick={(e) => clickBackDrop(e) && handleClose}
        >
          <ModalBox
            title={title}
            position={position}
            isXButton={isXButton}
            handleClose={handleClose}
            buttonLayout={buttonLayout}
            confirmButtonContent={confirmButtonContent}
            handleConfirm={handleConfirm}
            closeButtonContent={closeButtonContent}
            xButtonContent={xButtonContent}
          >
            {children}
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div<{ $position: string }>`
  position: fixed;
  display: flex;
  align-items: ${(props) => props.$position};
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
`;

export default Modal;
