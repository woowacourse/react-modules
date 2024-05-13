import React, { useState } from "react";
import CloseButton from "../../CloseButton/CloseButton";
import x_img from "../assets/images/x_img.png";
import Button from "../common/Button";
import { ModalContextProvider, useModalContext } from "../hooks/useModalContext";
import { ModalProps } from "../type";
import {
  StyledModalBody,
  StyledModalContainer,
  StyledModalDimmer,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalInput,
} from "./Modal.style";

/* -------------------------------------------------------------------------------------------------
 * ModalProvider
 * -----------------------------------------------------------------------------------------------*/
export const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalContent
 * -----------------------------------------------------------------------------------------------*/
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
    onClick && onClick();
    closeModal();
  };
  // return <StyledModalButton onClick={handleClick}>{children}</StyledModalButton>;
  return <div onClick={handleClick}>{children}</div>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalHeader
 * -----------------------------------------------------------------------------------------------*/
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

/* -------------------------------------------------------------------------------------------------
 * ModalBody
 * -----------------------------------------------------------------------------------------------*/
export const ModalBody: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};

/* -------------------------------------------------------------------------------------------------
 * ModalFooter
 * -----------------------------------------------------------------------------------------------*/
export const ModalFooter: React.FC<React.PropsWithChildren<{ align: "center" | "end" }>> = ({
  children,
  align,
}) => {
  return <StyledModalFooter align={align}>{children}</StyledModalFooter>;
};

/* -------------------------------------------------------------------------------------------------
 * AlertModal
 * -----------------------------------------------------------------------------------------------*/
export const AlertModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, ...props }) => {
  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter align="end">
        <ModalClose>
          <Button backgroundColor="#fff" fontColor="#333" borderColor="#33333340">
            취소
          </Button>
        </ModalClose>
        <ModalClose>
          <Button backgroundColor="#333" fontColor="#fff">
            확인
          </Button>
        </ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};

/* -------------------------------------------------------------------------------------------------
 * ConfirmModal
 * -----------------------------------------------------------------------------------------------*/
export const ConfirmModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, ...props }) => {
  return (
    <ModalContent {...props}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter align="end">
        <ModalClose>
          <Button backgroundColor="#333" fontColor="#fff">
            확인
          </Button>
        </ModalClose>
      </ModalFooter>
    </ModalContent>
  );
};

/* -------------------------------------------------------------------------------------------------
 * PromptModal
 * -----------------------------------------------------------------------------------------------*/
export const PromptModal: React.FC<
  React.PropsWithChildren<ModalProps & { title: string; size: "small" | "medium" | "large" }>
> = ({ children, title, placeholder, onSubmit, size, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(value);
    setValue("");
  };

  return (
    <ModalContent {...props} size={size}>
      <ModalHeader containClose={false} title={title} />
      <ModalBody>
        {children}
        <StyledModalInput value={value} onChange={handleChange} placeholder={placeholder} />
      </ModalBody>
      <ModalFooter align="end">
        <ModalClose>
          <Button backgroundColor="#fff" fontColor="#333" borderColor="#33333340">
            취소
          </Button>
        </ModalClose>
        <ModalClose>
          <Button backgroundColor="#333" fontColor="#fff" onClick={() => handleSubmit()}>
            확인
          </Button>
        </ModalClose>
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
