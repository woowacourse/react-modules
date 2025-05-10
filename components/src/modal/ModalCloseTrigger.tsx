import { PropsWithChildren } from 'react';
import { useModalContext } from './ModalProvider';

function ModalCloseTrigger({ children }: PropsWithChildren) {
  const { onClose } = useModalContext();

  return (
    <button type="button" onClick={onClose}>
      {children}
    </button>
  );
}

export default ModalCloseTrigger;
