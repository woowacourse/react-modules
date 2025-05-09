import { IoClose } from "react-icons/io5";
import { ModalColor } from "../../constants/theme";
import { CloseButton, HeaderWrapper, Title } from "./ModalHeader.styles";

interface ModalHeaderProps {
  titleId: string;
  titleText?: string;
  titleSize?: number;
  titleColor: ModalColor;
  iconColor: ModalColor;
  showCloseButton: boolean;
  onClose: () => void;
}

const ModalHeader = ({
  titleId,
  titleText,
  titleSize,
  titleColor,
  iconColor,
  showCloseButton,
  onClose,
}: ModalHeaderProps) => {
  return (
    <HeaderWrapper $titleText={titleText}>
      {titleText && (
        <Title $color={titleColor} $size={titleSize} id={titleId}>
          {titleText}
        </Title>
      )}
      {showCloseButton && (
        <CloseButton type="button" onClick={onClose} aria-label="close">
          <IoClose
            color={iconColor}
            size={30}
            aria-hidden="true"
            focusable="false"
          />
        </CloseButton>
      )}
    </HeaderWrapper>
  );
};

export default ModalHeader;
