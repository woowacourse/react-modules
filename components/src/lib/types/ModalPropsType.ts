export interface ModalPropsType {
  isModalOpen: boolean;
  title: string;
  size?: "small" | "medium" | "large";
  onClose: () => void;
}
