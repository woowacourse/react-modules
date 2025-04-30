import React from 'react';
import closeIcon from './assets/close.svg';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Modal;

Modal.Header = ({
  closeButton = false,
  children,
}: {
  closeButton: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <span>{children}</span>
      {closeButton && <img src={closeIcon} alt='X' />}
    </div>
  );
};
