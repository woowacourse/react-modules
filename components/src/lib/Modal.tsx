import styled from "@emotion/styled";
import CloseIcon from "./assets/close-icon.png";
import useModalContext, { ModalContext } from "./hooks/useModalContext";
import {
  ModalButtonProps,
  ModalCloseButtonProps,
  ModalContentProps,
  ModalDimmerProps,
  ModalPosition,
  ModalMainProps,
} from "./types/modalProps";
import useKeyDown from "./hooks/useKeyDown";

const Modal = Object.assign(ModalMain, {
  Dimmer: ModalDimmer,
  CloseButton: ModalCloseButton,
  Button: ModalButton,
  Content: ModalContent,
});

export default Modal;

function ModalMain({ children, isOpen, onClose }: ModalMainProps) {
  useKeyDown("Escape", onClose);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <S.ModalContainer $isOpen={isOpen}>{children}</S.ModalContainer>
    </ModalContext.Provider>
  );
}

function ModalDimmer(attributes: ModalDimmerProps) {
  const { onClose } = useModalContext();
  return <S.ModalDimmer onClick={onClose} {...attributes}></S.ModalDimmer>;
}

function ModalCloseButton(attributes: ModalCloseButtonProps) {
  const { onClose } = useModalContext();
  return <S.ModalCloseButton onClick={onClose} {...attributes} />;
}

function ModalButton({ children, theme = "dark", ...attributes }: ModalButtonProps) {
  return (
    <S.ModalButton $theme={theme} {...attributes}>
      {children}
    </S.ModalButton>
  );
}

function ModalContent({ position = "center", children, ...attributes }: ModalContentProps) {
  return (
    <S.ModalContent $position={position} {...attributes}>
      {children}
    </S.ModalContent>
  );
}

const MODAL_CONTENT_STYLE: {
  [key in ModalPosition]: React.CSSProperties;
} = {
  center: {
    top: "50%",
    left: "50%",
    width: "304px",
    transform: "translate(-50%, -50%)",
  },
  bottom: {
    boxSizing: "border-box",
    bottom: 0,
    left: 0,
    width: "100%",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
};

const S = {
  ModalContainer: styled.div<{ $isOpen: boolean }>(({ $isOpen }) => {
    return {
      display: $isOpen ? "block" : "none",
      wordBreak: "break-all",
    };
  }),

  ModalDimmer: styled.div({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#00000059",
  }),

  ModalHeader: styled.div({
    height: "20px",
    display: "flex",
    width: "fit-content",

    marginBottom: "8px",
  }),

  ModalCloseButton: styled.button({
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    backgroundImage: `url(${CloseIcon})`,
    backgroundSize: "contain",
    width: "14px",
    height: "14px",
    padding: "5px",
    marginLeft: "10px",

    position: "absolute",
    top: "24px",
    right: "32px",
  }),

  ModalTitle: styled.p({
    width: "fit-content",
    fontSize: "18px",
    margin: 0,
    fontWeight: 700,
  }),

  ModalContent: styled.div<{ $position: ModalPosition }>(({ $position }) => {
    return {
      borderRadius: "8px",
      position: "fixed",
      backgroundColor: "white",
      padding: "24px 32px",
      boxSizing: "border-box",
      maxHeight: "95vh",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      ...MODAL_CONTENT_STYLE[$position],
    };
  }),

  ModalButton: styled.button<{ $theme: "dark" | "light" }>(({ $theme }) => {
    return {
      width: "100%",
      minHeight: "44px",
      height: "fit-content",
      backgroundColor: $theme === "dark" ? "#333333" : "#ffffff",
      border: 0,
      borderRadius: "5px",

      padding: "13px 10px",
      fontWeight: 700,
      fontSize: "15px",

      alignItems: "center",
      color: $theme === "dark" ? "#ffffff" : "#8B95A1",
      cursor: "pointer",
    };
  }),
};
