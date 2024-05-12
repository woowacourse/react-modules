import { ReactElement } from 'react';

import { ModalContainerContext } from '@/lib/contexts';
import { useModalContext } from '@/lib/hooks';

/**
 *ModalContainer의 하위 컴포넌트로, Modal 내에서 모달 닫기 기능을  사용할 수 있는 버튼
 * 모달 등장,퇴장에 애니메이션이 필요한 모달의 경우 해당 모달 내의 하위 컴포넌트인 ModalContainer.CloseButtonWrapper의 하위에 button element를  두어서 사용하면 된다
 */
export default function ModalCloseButtonWrapper({ children }: { children: ReactElement<HTMLButtonElement> }) {
  const { closeModal } = useModalContext(ModalContainerContext);

  return <div onClick={closeModal}>{children}</div>;
}
