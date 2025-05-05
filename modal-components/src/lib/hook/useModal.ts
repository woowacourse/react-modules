import { useState } from "react";

export const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModalHandler = () => setIsModalOpened(true);
  const closeModalHandler = () => setIsModalOpened(false);

  return { isModalOpened, openModalHandler, closeModalHandler };
};
