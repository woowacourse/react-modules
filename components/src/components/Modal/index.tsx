import useModalContext from "../../hooks/useModalContext";

export { default as Modal } from "./Modal";
export { default as AlertModal } from "./AlertModal";
export { default as ConfirmModal } from "./ConfirmModal";
export { default as PromptModal } from "./PromptModal";

export const useModalAction = () => {
  const { action } = useModalContext();
  return action;
};
