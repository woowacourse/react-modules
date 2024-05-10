import useModalContext from "../../hooks/useModalContext";

export { default as Modal } from "./Modal";
export { default as AlertModal } from "./AlertModal/AlertModal";
export { default as ConfirmModal } from "./ConfirmModal/ConfirmModal";
export { default as PromptModal } from "./PromptModal/PromptModal";

export const useModalAction = () => {
  const { action } = useModalContext();
  return action;
};
