import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { useModalContext } from './ModalProvider';

function ModalCloseTrigger({ children }: PropsWithChildren) {
  const { onClose } = useModalContext();

  if (
    isValidElement(children) &&
    typeof children.type === 'function' &&
    children.type.name === 'Button'
  ) {
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
