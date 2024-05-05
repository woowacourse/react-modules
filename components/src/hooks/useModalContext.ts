import { useContext } from "react";
import { ModalContext } from "../components/ContextProvider/ModalProvider";

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("Modal에 대한 컨텍스트가 존재하지 않습니다. ModalProvider를 사용하세요.");
  }

  return modalContext;
};

export default useModalContext;
