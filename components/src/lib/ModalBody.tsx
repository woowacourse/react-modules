import React from 'react';

interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  return <section>{children}</section>;
}

export default ModalBody;
