import styled from "styled-components";
import Button from "./Button";
import { BUTTON_COLOR } from "./constant/color";

interface Props {
  buttonLayout?: string;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  handleConfirmEvent?: (e: React.MouseEvent) => void;
  handleCloseEvent: (e: React.MouseEvent) => void;
}
const ButtonBox = ({
  buttonLayout,
  closeButtonContent,
  confirmButtonContent,
  handleConfirmEvent,
  handleCloseEvent,
}: Props) => {
  return (
    <ButtonContainer $buttonLayout={buttonLayout}>
      {confirmButtonContent && handleConfirmEvent && (
        <Button
          content={confirmButtonContent}
          style={BUTTON_COLOR.defaultButton}
          handleClick={handleConfirmEvent}
        ></Button>
      )}
      {closeButtonContent && (
        <Button
          content={closeButtonContent}
          style={BUTTON_COLOR.closeButton}
          handleClick={handleCloseEvent}
        ></Button>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{ $buttonLayout?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$buttonLayout};
  background-color: white;
  gap: 12px;

  border-radius: 8px;
`;

export default ButtonBox;
