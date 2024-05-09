import useModalContext from "../../hooks/useModalContext";

export { default as Modal } from "./Modal";
export { default as AlertModal } from "./AlertModal";

export const useModalAction = () => {
  const { action } = useModalContext();
  return action;
};
