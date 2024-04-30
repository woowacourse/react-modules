import { ReactNode } from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ButtonBox from './ButtonBox';
interface Props {
  title: string;
  children?: ReactNode;
  isXButton: boolean;
  buttonLayout: string;
  closeButtonType?: string;
  closeButtonContent?: string;
  confirmButton?: string;
  confirmButtonContent?: string;
  handleConfirm?:  (e:React.MouseEvent) => void;
  position?: string;
  closeModal: (e:React.MouseEvent) => void;
  xButtonContent?:string
}
const ModalBox = ({
  title,
  position,
  isXButton,
  buttonLayout,
  closeButtonContent,
  confirmButtonContent,
  handleConfirm,
  children,
  closeModal,
  xButtonContent
}: Props) => {
  return (
    <ModalContainer
      $minWidth={position === 'bottom' ? '100%' : '200px'}
      $maxWidth={position === 'bottom' ? '100%' : '85%'}
    >
      <ModalHeader
        title={title}
        isXButton={isXButton}
        closeModal={closeModal}
        xButtonContent={xButtonContent}
      />
      <ContentWrapper>
      {children}
      </ContentWrapper>
      <ButtonBox
        buttonLayout={buttonLayout}
        closeButtonContent={closeButtonContent}
        confirmButtonContent={confirmButtonContent}
        closeModal={closeModal}
        confirmEvent={handleConfirm}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ $minWidth: string; $maxWidth: string }>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.$minWidth};
  max-width: ${(props) => props.$maxWidth};
  max-height:90%;
  background-color: white;
  padding: 24px 32px;
  gap: 5px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow:auto;
`

export default ModalBox;
