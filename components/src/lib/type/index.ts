export interface ModalProps {
  modalPosition: "center" | "bottom";
  closeButtonPosition: "top" | "bottom";
  placeholder?: string;
  onSubmit?: (value: string) => void | string;
}
