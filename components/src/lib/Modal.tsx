import styled from 'styled-components';
import { ReactNode } from 'react';
import ModalHeader from './ModalHeader';
import ButtonBox from './ButtonBox';
import { SIZE } from './constant/size';

type Size = 'small' | 'medium' | 'large';

type Position = 'bottom' | 'center';

type ButtonLayout = 'row' | 'column';

interface Props {
  position?: Position;
  title: string;
  isXButton?: boolean;
  buttonLayout?: ButtonLayout;
  children?: ReactNode;
  size?: Size;

  closeButtonContent?: string;
  confirmButton?: string;
  confirmButtonContent?: string;

  xButtonContent?: string;

  handleConfirm?: (e: React.MouseEvent) => void;
  handleClose?: (e: React.MouseEvent) => void;
}
const Modal = ({
  position = 'center',
  title,
  size = 'medium',
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
            $size={SIZE[size]}
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
              position={position}
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

const ModalBoxContainer = styled.div<{
  $minWidth: string;
  $maxWidth: string;
  $size: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$size};
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
