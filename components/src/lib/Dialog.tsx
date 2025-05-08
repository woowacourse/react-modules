import {
  ButtonHTMLAttributes,
  createContext,
  PropsWithChildren,
  useContext,
  useId,
} from 'react';
import { createPortal } from 'react-dom';
import useBoolean from './hooks/useBoolean';
import {
  StyledCloseButton,
  StyledContent,
  StyledHeader,
  StyledOverlay,
} from './Dialog.css';
import useOverlay from './hooks/useOverlay';

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
    throw new Error('컨텍스트가 존재하지 않습니다.');
  }
  return context;
}

interface TriggerProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open } = useDialogContext();

  return (
    <button onClick={open} className={className} {...props}>
      {children}
    </button>
  );
}

interface RootProps extends PropsWithChildren {
  root?: HTMLElement;
}

function Root({ children, root = document.body }: RootProps) {
  const { isOpen } = useDialogContext();
  return createPortal(isOpen ? children : null, root);
}

interface OverlayProps {
  className?: string;
}

function Overlay({ className }: OverlayProps) {
  const { close } = useDialogContext();
  const id = useId();
  const { handleClickOverlay } = useOverlay(close);

  return (
    <StyledOverlay
      id={id}
      onClick={(e) => handleClickOverlay(e, id)}
      className={className}
    />
  );
}

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

function Header({ children, className }: HeaderProps) {
  return <StyledHeader className={className}>{children}</StyledHeader>;
}

interface CloseButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function CloseButton({ children, className, ...props }: CloseButtonProps) {
  const { close } = useDialogContext();

  return (
    <StyledCloseButton onClick={close} className={className} {...props}>
      {children}
    </StyledCloseButton>
  );
}

interface ContentProps extends PropsWithChildren {
  position?: 'center' | 'bottom';
  className?: string;
}

function Content({ children, position = 'center', className }: ContentProps) {
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
