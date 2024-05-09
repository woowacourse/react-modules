import { useState } from 'react';

const useModal = (initState: boolean = false) => {
  const [isOpened, setIsOpened] = useState(initState);

  const handelModalClose = () => {
    setIsOpened(false);
  };

  const handleModalOpen = () => {
    setIsOpened(true);
  };

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };

  return { isOpened, handelModalClose, handleModalOpen, toggleModal };
};

export default useModal;
