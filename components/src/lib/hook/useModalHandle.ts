import { useState } from "react";
function useModalHandler() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { modalOpen, openModal, closeModal };
}

export default useModalHandler;
