import { createContext, useContext } from 'react';

export type ModalSize = 'small' | 'medium' | 'large';

type ModalContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  size?: ModalSize;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal 컴포넌트 내부에서만 사용할 수 있습니다.');
  }
  return context;
}

export default useModalContext;
