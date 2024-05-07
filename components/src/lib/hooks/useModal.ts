import { useState } from 'react';

export default function useModal(initialModalState: boolean) {
  const [isModalOpen, setModalOpen] = useState(initialModalState);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return { isModalOpen, openModal, closeModal };
}
