import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface ModalContainerProps {
  isOpen: boolean;
  children: ReactElement | ReactElement[];
}

function ModalContainer({ isOpen, children }: ModalContainerProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(<StyledModal>{children}</StyledModal>, document.body);
}

export default ModalContainer;

const StyledModal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
