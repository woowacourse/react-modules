import styled from "@emotion/styled";
import CloseIconSVG from "../assets/CloseIconSVG";

const CloseButtonStyle = styled.button`
  cursor: pointer;
  &:focus {
    border: 2px solid #0d61f1;
    border-radius: 4px;
  }
`;

function CloseButton({
  onClose,
  isCloseFocus,
}: {
  onClose?: () => void;
  isCloseFocus?: boolean;
}) {
  return (
    <CloseButtonStyle
      type="button"
      onClick={onClose}
      {...(isCloseFocus ? { autoFocus: true } : {})}
    >
      <CloseIconSVG sizeName={"md"}></CloseIconSVG>
    </CloseButtonStyle>
  );
}

export default CloseButton;
