import { useContext } from 'react';

import BottomModalContext from '../contexts/BottomModalContext';

export default function useBottomModalContext() {
  const context = useContext(BottomModalContext);
  if (!context) throw new Error('modal context를 찾을 수 없습니다.');

  return context;
}
