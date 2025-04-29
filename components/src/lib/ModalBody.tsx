import React from 'react';

interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  return <div>{children}</div>;
}

export default ModalBody;
