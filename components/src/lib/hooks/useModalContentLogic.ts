import { useContext, useRef } from 'react';
import ModalContext from '../contexts/ModalContext';
import useAutoFocus from './useAutoFocus';

const useModalContentLogic = () => {
  const { onClose, position } = useContext(ModalContext);
  const contentRef = useRef<HTMLDivElement>(null);
  useAutoFocus(contentRef);

  return { onClose, position, contentRef };
};

export default useModalContentLogic;
