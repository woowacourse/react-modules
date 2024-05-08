import styled from "styled-components";
import Button from "./Button";
import { BUTTON_COLOR } from "./constant/color";
import { ButtonPosition, ButtonSize, ModalButtonLayout } from "./modalType";

interface Props {
  buttonLayout: ModalButtonLayout;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  handleConfirmEvent?: (e: React.MouseEvent) => void;
  handleCloseEvent: (e: React.MouseEvent) => void;
  buttonSize: ButtonSize;
  buttonPosition: ButtonPosition;
}

const getButtonPosition = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

const ButtonBox = ({
  buttonLayout,
  buttonPosition,
  closeButtonContent,
  confirmButtonContent,
  handleConfirmEvent,
  handleCloseEvent,
  buttonSize,
}: Props) => {
  return (
    <ButtonContainer
      $buttonLayout={buttonLayout}
      $buttonPosition={buttonPosition}
    >
      {confirmButtonContent && handleConfirmEvent && (
        <Button
          buttonSize={buttonSize}
          content={confirmButtonContent}
          style={BUTTON_COLOR.defaultButton}
          handleClick={handleConfirmEvent}
        ></Button>
      )}
      {closeButtonContent && (
        <Button
          buttonSize={buttonSize}
          content={closeButtonContent}
          style={BUTTON_COLOR.closeButton}
          handleClick={handleCloseEvent}
        ></Button>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{
  $buttonLayout: ModalButtonLayout;
  $buttonPosition: ButtonPosition;
}>`
  display: flex;
  flex-direction: ${(props) => props.$buttonLayout};
  justify-content: ${(props) => getButtonPosition[props.$buttonPosition]};
  gap: 12px;

  border-radius: 8px;
`;

export default ButtonBox;
