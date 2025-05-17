import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  RefObject,
} from "react";
import { createPortal } from "react-dom";
import useEscapeModal from "../hooks/useEscapeModal";
import {
  StyledCloseAction,
  StyledContent,
  StyledHeader,
  StyledOverlay,
} from "./Dialog.css";

type DialogProps = ComponentProps<"div"> & {
  open: boolean;
  modalClose: () => void;
  position?: "bottom" | "center";
  size?: "small" | "medium" | "large";
  ref?: RefObject<HTMLDivElement | null>;
};

interface DialogContextType {
  modalClose: () => void;
  open: boolean;
  position: "center" | "bottom";
  size?: "small" | "medium" | "large";
  ref?: RefObject<HTMLDivElement | null>;
}

export const DialogContext = createContext<DialogContextType>({
  open: false,
  modalClose: () => {},
  position: "center",
  size: "medium",
});

export function Dialog({
  children,
  open,
  modalClose,
  position = "center",
  size = "medium",
  ref,
}: DialogProps) {
  return (
    <DialogContext.Provider value={{ open, modalClose, position, size, ref }}>
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

function Root({ children }: { children: React.ReactNode }) {
  const { open } = useDialogContext();
  return createPortal(open ? children : null, document.body);
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

function CloseAction({
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
    <StyledCloseAction style={style} onClick={modalClose} className={className}>
      {children}
    </StyledCloseAction>
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
  const { position, size, ref } = useDialogContext();

  return (
    <StyledContent
      ref={ref}
      style={style}
      position={position}
      size={size}
      className={className}
    >
      {children}
    </StyledContent>
  );
}

Dialog.Root = Root;
Dialog.Overlay = Overlay;
Dialog.Header = Header;
Dialog.CloseAction = CloseAction;
Dialog.Content = Content;

export default Dialog;
