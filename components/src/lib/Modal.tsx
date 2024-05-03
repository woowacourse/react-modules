import styled from 'styled-components';
import { ReactNode } from 'react';
import ModalHeader from './ModalHeader';
import ButtonBox from './ButtonBox';

interface Props {
  position?: string;
  title: string;
  isXButton?: boolean;
  buttonLayout?: string;
  children?: ReactNode;

  closeButtonContent?: string;
  confirmButton?: string;
  confirmButtonContent?: string;

  xButtonContent?: string;

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
  xButtonContent,
}: Props) => {
  const isClickBackDrop = (e: React.MouseEvent) => {
    return e.currentTarget === e.target;
  };

  return (
    <>
      {
        <ModalContainer
          $position={position === 'bottom' ? 'flex-end' : 'center'}
          onClick={(e) => isClickBackDrop(e) && handleClose}
        >
          <ModalBoxContainer
            $minWidth={position === 'bottom' ? '100%' : '200px'}
            $maxWidth={position === 'bottom' ? '100%' : '85%'}
          >
            <ModalHeader
              title={title}
              isXButton={isXButton}
              handleClose={handleClose}
              xButtonContent={xButtonContent}
            />
            <ContentWrapper>{children}</ContentWrapper>
            <ButtonBox
              buttonLayout={buttonLayout}
              closeButtonContent={closeButtonContent}
              confirmButtonContent={confirmButtonContent}
              handleClose={handleClose}
              confirmEvent={handleConfirm}
            />
          </ModalBoxContainer>
        </ModalContainer>
      }
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

const ModalBoxContainer = styled.div<{ $minWidth: string; $maxWidth: string }>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.$minWidth};
  max-width: ${(props) => props.$maxWidth};
  max-height: 90%;
  background-color: white;
  padding: 24px 32px;
  gap: 5px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;
export default Modal;
