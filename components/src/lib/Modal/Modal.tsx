import React from "react";
import { ModalContextProvider, useModalContext } from "../hooks/useModalContext";
import { ModalContainer, ModalDimmer } from "./Modal.style";

interface ModalProps {
  modalPosition?: "center" | "bottom";
  closeButtonPosition?: "top" | "bottom";
}

/* -------------------------------------------------------------------------------------------------
 * ModalProvider
 * -----------------------------------------------------------------------------------------------*/
export const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalContent
 * -----------------------------------------------------------------------------------------------*/
export const ModalContent: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  modalPosition,
  closeButtonPosition,
}) => {
  const { isOpen, closeModal } = useModalContext();

  return (
    isOpen && (
      <>
        <ModalDimmer onClick={closeModal} />
        <ModalContainer modalPosition={modalPosition} closeButtonPosition={closeButtonPosition}>
          {children}
        </ModalContainer>
      </>
    )
  );
};

/* -------------------------------------------------------------------------------------------------
 * ModalTrigger
 * -----------------------------------------------------------------------------------------------*/
export const ModalTrigger: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { openModal } = useModalContext();
  return <button onClick={openModal}>{children}</button>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalClose
 * -----------------------------------------------------------------------------------------------*/
export const ModalClose: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { closeModal } = useModalContext();
  return <button onClick={closeModal}>{children}</button>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalHeader
 * -----------------------------------------------------------------------------------------------*/
export const ModalHeader: React.FC<{ title?: string; containClose: boolean }> = ({
  title,
  containClose,
}) => {
  const { closeModal } = useModalContext();
  return (
    <div>
      <h2>{title}</h2>
      {containClose && <button onClick={closeModal}>X</button>}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ModalBody
 * -----------------------------------------------------------------------------------------------*/
export const ModalBody: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalFooter
 * -----------------------------------------------------------------------------------------------*/
export const ModalFooter: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>;
};

/* -------------------------------------------------------------------------------------------------
 * Modal
 * -----------------------------------------------------------------------------------------------*/
export const Modal = {
  Provider: ModalProvider,
  Trigger: ModalTrigger,
  Close: ModalClose,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Content: ModalContent,
};
