import CloseButton from "../../../Button/CloseButton";
import "./ModalHeader.css";

interface ModalHeaderProps {
  title: string;
  hasCloseButton: boolean;
  closeModal: () => void;
}

const ModalHeader = ({ title, hasCloseButton, closeModal }: ModalHeaderProps) => {
  return (
    <div className="darr-modal-header">
      <h3>{title}</h3>

      {hasCloseButton && (
        <div className="close-button-wrapper">
          <CloseButton handleClick={closeModal} />{" "}
        </div>
      )}
    </div>
  );
};

export default ModalHeader;
