import React from "react";
import x_img from "../assets/images/x_img.png";
import { ModalContextProvider, useModalContext } from "../hooks/useModalContext";
import { ModalProps } from "../type";
import {
  StyledModalBody,
  StyledModalContainer,
  StyledModalDimmer,
  StyledModalFooter,
  StyledModalHeader,
} from "./Modal.style";
import CloseButton from "./components/CloseButton/CloseButton";

export const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export const ModalContent: React.FC<
  React.PropsWithChildren<ModalProps & { size?: "small" | "medium" | "large" }>
> = ({ children, modalPosition, closeButtonPosition, size }) => {
  const { isOpen, closeModal } = useModalContext();

  return (
    isOpen && (
      <>
        <StyledModalDimmer onClick={closeModal} />
        <StyledModalContainer
          modalPosition={modalPosition}
          closeButtonPosition={closeButtonPosition}
          size={size || "medium"}
        >
          {children}
        </StyledModalContainer>
      </>
    )
  );
};

export const ModalTrigger: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { openModal } = useModalContext();
  return <button onClick={openModal}>{children}</button>;
};

export const ModalClose: React.FC<React.PropsWithChildren<{ onClick?: () => void }>> = ({
  children,
  onClick,
}) => {
  const { closeModal } = useModalContext();
  const handleClick = () => {
    onClick && onClick();
    closeModal();
  };

  return <div onClick={handleClick}>{children}</div>;
};

export const ModalHeader: React.FC<{ title?: string; containClose: boolean }> = ({
  title,
  containClose,
}) => {
  return (
    <StyledModalHeader>
      <h2>{title}</h2>
      {containClose && (
        <CloseButton>
          <img src={x_img} />
        </CloseButton>
      )}
    </StyledModalHeader>
  );
};

export const ModalBody: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};

export const ModalFooter: React.FC<React.PropsWithChildren<{ align: "center" | "end" }>> = ({
  children,
  align,
}) => {
  return <StyledModalFooter align={align}>{children}</StyledModalFooter>;
};

export const Modal = {
  Provider: ModalProvider,
  Trigger: ModalTrigger,
  Close: ModalClose,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Content: ModalContent,
};
