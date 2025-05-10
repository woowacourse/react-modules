import { PropsWithChildren } from 'react';
import { useModalContext } from './ModalProvider';

function ButtonTrigger({ children }: PropsWithChildren) {
  const { onOpen } = useModalContext();

  return (
    <button type="button" onClick={onOpen}>
      {children}
    </button>
  );
}

export default ButtonTrigger;
