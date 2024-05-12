import "./ModalCloseButton.css";
import { ModalCloseButtonProps } from "../type/modal.type";

const ModalCloseButton = ({ ...rest }: ModalCloseButtonProps) => {
  return (
    <button
      className="modal-close-btn"
      {...rest}
    />
  );
};

export default ModalCloseButton;
