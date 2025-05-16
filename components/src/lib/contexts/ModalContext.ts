import { createContext } from 'react';
import { Position } from '../types/props';

const ModalContext = createContext<{ onClose: () => void; position: Position }>({
  onClose: () => {},
  position: 'center',
});

export default ModalContext;
