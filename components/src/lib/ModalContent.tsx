import { PropsWithChildren } from 'react';

interface ModalContentProps extends PropsWithChildren {}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div>{children}</div>;
};

export default ModalContent;
