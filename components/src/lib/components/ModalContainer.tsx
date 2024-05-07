import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

import '../styles/reset.css';
import { ModalContainerContext } from '../contexts';
import { useModalContext } from '../hooks';
import { ModalButtonProps } from '../types/modal';

import Backdrop from './Backdrop';
import Contents from './Contents';
import ModalPortal from './ModalPortal';

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
interface ModalContainerProps {
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
}
function ModalContainer(props: ModalContainerProps) {
  const { openModal, closeModal, children } = props;

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContainerContext.Provider
            value={{
              closeModal,
            }}
          >
            <ModalWrapper>{children}</ModalWrapper>
          </ModalContainerContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

function ModalButton({ isCloseModal, children, onClick, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext(ModalContainerContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (isCloseModal) {
      closeModal();
    }
  };

  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}
ModalContainer.backdrop = Backdrop;
ModalContainer.button = ModalButton;
ModalContainer.contents = Contents;

export default ModalContainer;
