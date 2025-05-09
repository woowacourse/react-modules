import styled from "@emotion/styled";
import Button from "../common/Button";
import { Position, useModalContext } from "../useModalContext";

const Footer = () => {
  const {
    onClose,
    onConfirm,
    position,
    primaryButton,
    primaryButtonText,
    secondaryButton,
    secondaryButtonText,
  } = useModalContext();

  return (
    <ButtonContainer position={position}>
      {primaryButton ? (
        <Button
          onClick={onClose}
          text={primaryButtonText}
          color="#8b95a1"
          backgroundColor="transparent"
        />
      ) : null}

      {secondaryButton ? (
        <Button text={secondaryButtonText} onClick={onConfirm} />
      ) : null}
    </ButtonContainer>
  );
};

export default Footer;

const ButtonContainer = styled.div<{ position: Position }>`
  display: flex;
  justify-content: end;
  gap: 12px;
  width: ${({ position }) =>
    position === "bottom" &&
    `
      flex-grow:1;
      width:100%;

      ${Button} button{
        width:100%;
      }
    `};
`;
