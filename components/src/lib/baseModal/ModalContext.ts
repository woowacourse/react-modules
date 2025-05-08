import { createContext, useContext } from 'react';

export const ModalContext = createContext<{ onClose: () => void } | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('모달 컨텍스트를 사용할 수 없습니다.');
  return context;
};
