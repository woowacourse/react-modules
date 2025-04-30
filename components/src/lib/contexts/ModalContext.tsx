import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const ModalContext = createContext<{ isModalOpened: boolean } | undefined>(undefined);

var _setIsModalOpened: Dispatch<SetStateAction<boolean>>;

export const ModalProvider = ({ children }: any) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  _setIsModalOpened = setIsModalOpened;
  return <ModalContext.Provider value={{ isModalOpened }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const openModalHandler = () => _setIsModalOpened(true);
  const closeModalHandler = () => _setIsModalOpened(false);

  return { openModalHandler, closeModalHandler };
};
