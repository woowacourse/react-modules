import CloseIconSVG from "./assets/CloseIconSVG";
import { ModalHeaderContainer } from "./styles/ModalStyle";
import { ModalTitle } from "./styles/ModalTextStyle";
import { ModalHeaderProps } from "./types/modalTypes";

const ModalHeader = ({
  titleText,
  hasCloseButton,
  onClose,
}: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer>
      <ModalTitle>{titleText}</ModalTitle>
      {hasCloseButton && (
        <button style={{ cursor: "pointer" }} type="button" onClick={onClose}>
          <CloseIconSVG sizeName={"md"}></CloseIconSVG>
        </button>
      )}
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
