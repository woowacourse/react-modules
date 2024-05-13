import { ModalInputProps } from "../../type/modal.type";
import "./ModalInput.css";

const ModalInput = ({ ...rest }: ModalInputProps) => {
  return (
    <input
      className="modal-input"
      {...rest}
    />
  );
};

export default ModalInput;
