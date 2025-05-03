import { createContext, useContext, useId } from "react";
import { createPortal } from "react-dom";
import useBoolean from "./hooks/useBoolean";
import useEscapeModal from "./hooks/useEscapeModal";
import {
  StyledCloseButton,
  StyledContent,
  StyledHeader,
  StyledOverlay,
} from "./Dialog.css";

interface DialogContextType {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function Dialog({ children }: { children: React.ReactNode }) {
  const { value: isOpen, setTrue: open, setFalse: close } = useBoolean(false);

  return (
    <DialogContext.Provider value={{ isOpen, open, close }}>
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useDialogContext();

  return (
    <button onClick={open} className={className}>
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { close } = useDialogContext();
  const { handleClickOverlay } = useEscapeModal(close);
  const id = useId();

  return (
    <StyledOverlay
      id={id}
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <StyledHeader className={className}>{children}</StyledHeader>;
}

function CloseButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { close } = useDialogContext();

  return (
    <StyledCloseButton onClick={close} className={className}>
      {children}
    </StyledCloseButton>
  );
}

function Content({
  children,
  position = "center",
  className,
}: {
  children: React.ReactNode;
  position?: "center" | "bottom";
  className?: string;
}) {
  return (
    <StyledContent position={position} className={className}>
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
