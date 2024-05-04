import { useContext } from 'react';
import ModalContext from '../constants/modalContext';

export default function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('modal context를 찾을 수 없습니다.');
  return context;
}
