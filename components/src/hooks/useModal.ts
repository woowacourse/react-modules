import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick };
};
