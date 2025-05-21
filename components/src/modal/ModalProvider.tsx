import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// ============================== Types ==============================

type ModalContextType = {
  open: boolean;
  role: ModalProviderRoleType;
  onClose: () => void;
  onOpen: () => void;
};
interface ModalProviderProps {
  role?: ModalProviderRoleType;
}
type ModalProviderRoleType = 'modal' | 'alert-modal';

// ============================== ModalContext ==============================

const ModalContext = createContext<ModalContextType | null>(null);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'Modal의 하위 컴포넌트들은 Modal 컴포넌트 내부에서만 렌더링할 수 있습니다.'
    );
  }

  return context;
}

// ============================== ModalProvider Component ==============================

function ModalProvider({
  role = 'modal',
  children,
}: PropsWithChildren<ModalProviderProps>) {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const value = useMemo(
    () => ({ role, open, onClose, onOpen }),
    [role, open, onClose, onOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
