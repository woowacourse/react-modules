import { createContext, useContext, useId } from 'react';
import { createPortal } from 'react-dom';
import './Dialog.css';
import useBoolean from './hooks/useBoolean';
import useEscapeModal from './hooks/useEscapeModal';

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
    throw new Error('useDialogContext must be used within a Dialog');
  }
  return context;
}

function Trigger({ children }: { children: React.ReactNode }) {
  const { open } = useDialogContext();

  return <div onClick={open}>{children}</div>;
}

function Root({ children }: { children: React.ReactNode }) {
  const { isOpen } = useDialogContext();
  return createPortal(isOpen ? children : null, document.body);
}

function Overlay({ children }: { children: React.ReactNode }) {
  const { close } = useDialogContext();
  const id = useId();
  const { handleClickOverlay } = useEscapeModal(close);

  return (
    <div
      className="dialog-overlay"
      id={id}
      onClick={(e) => handleClickOverlay(e, id)}
    >
      {children}
    </div>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function CloseButton({ children }: { children: React.ReactNode }) {
  const { close } = useDialogContext();

  return <button onClick={close}>{children}</button>;
}

function Content({
  children,
  position = 'center',
}: {
  children: React.ReactNode;
  position?: 'center' | 'bottom';
}) {
  return <div className={`dialog-content ${position}`}>{children}</div>;
}

Dialog.Root = Root;
Dialog.Overlay = Overlay;
Dialog.Header = Header;
Dialog.CloseButton = CloseButton;
Dialog.Content = Content;
Dialog.Trigger = Trigger;

export default Dialog;
