import { createContext, useContext, useId } from "react";
import { createPortal } from "react-dom";
import useModalState from "./hooks/useModalState";
import useEscapeModal from "./hooks/useEscapeModal";
import {
  StyledCloseButton,
  StyledContent,
  StyledHeader,
  StyledOverlay,
} from "./Dialog.css";

interface DialogContextType {
  modalOpen: () => void;
  modalClose: () => void;
  isOpen: boolean;
  position: "center" | "bottom";
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  modalOpen: () => {},
  modalClose: () => {},
  position: "center",
});

export function Dialog({
  children,
  position = "center",
}: {
  children: React.ReactNode;
  position?: "bottom" | "center";
}) {
  const { isOpen, modalOpen, modalClose } = useModalState(false);

  return (
    <DialogContext.Provider value={{ isOpen, modalOpen, modalClose, position }}>
      {children}
    </DialogContext.Provider>
  );
}

function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("컨텍스트가 존재하지 않는다.");
  }
  return context;
}

function Trigger({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}) {
  const { modalOpen } = useDialogContext();

  return (
    <button style={style} onClick={modalOpen} className={className}>
      {children}
    </button>
  );
}

function Root({ children }: { children: React.ReactNode }) {
  const { isOpen } = useDialogContext();
  return createPortal(isOpen ? children : null, document.body);
}

function Overlay({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}) {
  const { modalClose } = useDialogContext();
  const { handleClickOverlay } = useEscapeModal(modalClose);
  const id = useId();

  return (
    <StyledOverlay
      id={id}
      style={style}
      onClick={(e) => handleClickOverlay(e, id)}
      className={className}
    >
      {children}
    </StyledOverlay>
  );
}

function Header({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}) {
  return (
    <StyledHeader style={style} className={className}>
      {children}
    </StyledHeader>
  );
}

function CloseButton({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}) {
  const { modalClose } = useDialogContext();

  return (
    <StyledCloseButton style={style} onClick={modalClose} className={className}>
      {children}
    </StyledCloseButton>
  );
}

function Content({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}) {
  const { position } = useDialogContext();

  return (
    <StyledContent style={style} position={position} className={className}>
      {children}
    </StyledContent>
  );
}

Dialog.Root = Root;
Dialog.Overlay = Overlay;
Dialog.Header = Header;
Dialog.CloseButton = CloseButton;
Dialog.Content = Content;
Dialog.Trigger = Trigger;

export default Dialog;
