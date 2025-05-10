import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ModalContextType = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const ModalContext = createContext<ModalContextType>({
  open: false,
  onClose: () => {},
  onOpen: () => {},
});

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function ModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({ open, onClose, onOpen }),
    [open, onClose, onOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
