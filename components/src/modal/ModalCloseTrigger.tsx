import { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { useModalContext } from './ModalProvider';
import { isTriggerButtonElement } from './utils/modalTriggerUtils';

function ModalCloseTrigger({ children }: PropsWithChildren) {
  const { onClose } = useModalContext();

  if (isTriggerButtonElement(children)) {
    const element = children as ReactElement<{
      onClick?: (e: React.MouseEvent) => void;
    }>;
    const originalOnClick = element.props.onClick;

    return cloneElement(element, {
      onClick: (event: React.MouseEvent) => {
        if (typeof originalOnClick === 'function') {
          originalOnClick(event);
        }
        onClose();
      },
    });
  }

  return (
    <button type="button" onClick={onClose}>
      {children}
    </button>
  );
}

export default ModalCloseTrigger;
