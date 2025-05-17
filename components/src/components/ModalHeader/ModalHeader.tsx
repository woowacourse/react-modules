import { IoClose } from "react-icons/io5";
import { useModalContext } from "../../hooks/useModalContext";
import { CloseButton, HeaderWrapper, Title } from "./ModalHeader.styles";

interface ModalHeaderProps {
  titleId: string;
  titleText?: string;
  titleSize?: number;
  showCloseButton: boolean;
}

const ModalHeader = ({
  titleId,
  titleText,
  titleSize,
  showCloseButton,
}: ModalHeaderProps) => {
  const { currentTheme, onClose } = useModalContext();

  return (
    <HeaderWrapper $titleText={titleText}>
      {titleText && (
        <Title $color={currentTheme.title} $size={titleSize} id={titleId}>
          {titleText}
        </Title>
      )}
      {showCloseButton && (
        <CloseButton type="button" onClick={onClose} aria-label="close">
          <IoClose
            color={currentTheme.icon}
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
