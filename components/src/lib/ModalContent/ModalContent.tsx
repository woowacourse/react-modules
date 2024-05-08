import { PropsWithChildren } from 'react';

export interface ModalContentProps extends PropsWithChildren {}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div style={{ width: '90%' }}>{children}</div>;
};

export default ModalContent;
