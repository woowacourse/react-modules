import Close from "../asset/Close.svg";
import "./CloseButton.css";

interface CloseButtonProps {
  handleClick: () => void;
}

const CloseButton = ({ handleClick }: CloseButtonProps) => {
  return (
    <button className="darr-close-button" onClick={handleClick}>
      <img src={Close} alt="모달 닫기 버튼" />
    </button>
  );
};

export default CloseButton;
