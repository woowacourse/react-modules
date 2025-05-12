import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { useModalContext } from './ModalProvider';

function ModalOpenTrigger({ children }: PropsWithChildren) {
  const { onOpen } = useModalContext();

  const isButton =
    isValidElement(children) &&
    typeof children.type === 'string' &&
    children.type === 'button';

  const isModalButton =
    isValidElement(children) &&
    typeof children.type === 'function' &&
    children.type.name === 'Button';

  if (isButton || isModalButton) {
    const element = children as ReactElement<{
      onClick?: (e: React.MouseEvent) => void;
    }>;
    const originalOnClick = element.props.onClick;

    return cloneElement(element, {
      onClick: (event: React.MouseEvent) => {
        if (typeof originalOnClick === 'function') {
          originalOnClick(event);
        }
        onOpen();
      },
    });
  }

  return (
    <button type="button" onClick={onOpen}>
      {children}
    </button>
  );
}

export default ModalOpenTrigger;
