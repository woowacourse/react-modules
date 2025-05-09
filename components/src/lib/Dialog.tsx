import {
  ButtonHTMLAttributes,
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useId,
} from 'react';
import { createPortal } from 'react-dom';
import useBoolean from './hooks/useBoolean';
import useFocus from './hooks/useFocus';
import { closeButton, content, header, overlay } from './Dialog.css';
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

export function useDialogContext() {
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
    <div
      css={overlay}
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
  return (
    <div css={header} className={className}>
      {children}
    </div>
  );
}

interface CloseButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function CloseButton({ children, className, ...props }: CloseButtonProps) {
  const { close } = useDialogContext();

  return (
    <button css={closeButton} onClick={close} className={className} {...props}>
      {children}
    </button>
  );
}

interface ContentProps extends PropsWithChildren {
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

function Content({
  children,
  position = 'center',
  size = 'medium',
  className,
  ref,
}: ContentProps) {
  const { isOpen } = useDialogContext();
  const { modalRef } = useFocus(isOpen);

  return (
    <div
      css={content(position, size)}
      className={className}
      ref={ref || modalRef}
    >
      {children}
    </div>
  );
}

Dialog.Root = Root;
Dialog.Overlay = Overlay;
Dialog.Header = Header;
Dialog.CloseButton = CloseButton;
Dialog.Content = Content;
Dialog.Trigger = Trigger;

export default Dialog;
