import { useState } from 'react';

interface ModalHook {
  isOpen: boolean;
  toggleModal: () => void;
}

const useModal = (): ModalHook => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleModal };
};

export default useModal;
