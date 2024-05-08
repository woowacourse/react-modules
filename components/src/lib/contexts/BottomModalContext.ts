import { createContext } from 'react';

export interface BottomModalContextType {
  handleCloseModal: () => void;
}
/**
 * BottomModal 의 등장,퇴장 애니메이션이 적용된 모달 닫기 기능을 BottomModal 내에서 어디서든 사용할 수 있도록 제공된 context
 */
const BottomModalContext = createContext<BottomModalContextType | null>(null);

export default BottomModalContext;
