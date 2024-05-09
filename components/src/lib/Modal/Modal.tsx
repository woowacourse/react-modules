import React, { useState } from "react";
import { ModalContextProvider, useModalContext } from "../hooks/useModalContext";
import {
  StyledModalBody,
  StyledModalContainer,
  StyledModalDimmer,
  StyledModalFooter,
  StyledModalHeader,
} from "./Modal.style";

export interface ModalProps {
  modalPosition: "center" | "bottom";
  closeButtonPosition: "top" | "bottom";
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
        <StyledModalDimmer onClick={closeModal} />
        <StyledModalContainer
          modalPosition={modalPosition}
          closeButtonPosition={closeButtonPosition}
        >
          {children}
        </StyledModalContainer>
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
export const ModalClose: React.FC<React.PropsWithChildren<{ onClick?: () => void }>> = ({
  children,
  onClick,
}) => {
  const { closeModal } = useModalContext();
  const handleClick = () => {
    if (onClick) onClick();
    closeModal();
  };
  return <button onClick={handleClick}>{children}</button>;
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
    <StyledModalHeader>
      <h2>{title}</h2>
      {containClose && <button onClick={closeModal}>X</button>}
    </StyledModalHeader>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ModalBody
 * -----------------------------------------------------------------------------------------------*/
export const ModalBody: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalFooter
 * -----------------------------------------------------------------------------------------------*/
export const ModalFooter: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <StyledModalFooter>{children}</StyledModalFooter>;
};

/* -------------------------------------------------------------------------------------------------
 * AlertModal
 * -----------------------------------------------------------------------------------------------*/
export const AlertModal: React.FC<React.PropsWithChildren<ModalProps & { title: string }>> = ({
  children,
  title,
  ...props
}) => {
  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <ModalClose>닫기</ModalClose>
        <ModalClose>확인</ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ConfirmModal
 * -----------------------------------------------------------------------------------------------*/
export const ConfirmModal: React.FC<React.PropsWithChildren<ModalProps & { title: string }>> = ({
  children,
  title,
  ...props
}) => {
  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <ModalClose>확인</ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};

/* -------------------------------------------------------------------------------------------------
 * PromptModal
 * -----------------------------------------------------------------------------------------------*/
export const PromptModal: React.FC<React.PropsWithChildren<ModalProps & { title: string }>> = ({
  children,
  title,
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>
        {children}
        <form onSubmit={() => console.log(value)}></form>
        <input value={value} onChange={handleChange} />
      </ModalBody>
      <ModalFooter>
        <ModalClose onClick={() => console.log(value)}>확인</ModalClose>
      </ModalFooter>
    </ModalContent>
  );
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
  Alert: AlertModal,
  Confirm: ConfirmModal,
  Prompt: PromptModal,
};
