import { PropsWithChildren, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

const PortalWrapper = ({ children }: PropsWithChildren) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.body);
  }, []);

  if (!container) return null;
  return createPortal(<>{children}</>, container);
};

type Props = {
  /**
   * If true, the modal will be open
   */
  isOpen: boolean;
  /**
   * The content of the modal
   */
  children: React.ReactNode;
} & PropsWithChildren<'div'>;

const Portal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  return <PortalWrapper>{isOpen && children}</PortalWrapper>;
};

type ModalProps = {
  /**
   * If true, the modal will be open
   */
  isOpen: boolean;
  /**
   * position of the modal
   * @default 'center'
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * The title of the modal
   */
  title: string;
  /**
   * Indicate close button visibility
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * close function to be called when the close button is clicked
   * @default 'Close'
   */
  onClose: VoidFunction;
  /**
   * The content of the modal
   */
  children: React.ReactNode;
};

// export const Modal = ({ isOpen ,position, title, showCloseButton } :ModalProps) => {
//   return (
//     <Portal isOpen={isOpen}>
//       <StyledBackDrop />
//       <StyledModalContainer>
//         <StyledModalContent>
//     </Portal>
//   );
// };
