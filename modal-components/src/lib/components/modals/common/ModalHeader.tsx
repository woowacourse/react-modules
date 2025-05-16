import { ModalHeaderContainer } from "./ModalStyle";
import { ModalTitle } from "../../../styles/ModalTextStyle";
import { ModalHeaderProps } from "../../../types/modalTypes";
import CloseButton from "../../common/CloseButton";

const ModalHeader = ({
  titleText,
  hasCloseButton,
  onClose,
  isCloseFocus,
}: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer>
      <ModalTitle>{titleText}</ModalTitle>
      {hasCloseButton && (
        <CloseButton onClose={onClose} isCloseFocus={isCloseFocus} />
      )}
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
