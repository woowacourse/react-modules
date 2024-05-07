import styled from 'styled-components';
import Button from './Button';
import { BUTTON_COLOR } from './constant/color';

interface Props {
  position: string;
  buttonLayout?: string;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  confirmEvent?: (e: React.MouseEvent) => void;
  handleClose?: (e: React.MouseEvent) => void;
}
const ButtonBox = ({
  position,
  buttonLayout,
  closeButtonContent,
  confirmButtonContent,
  confirmEvent,
  handleClose,
}: Props) => {
  return (
    <ButtonContainer $buttonLayout={buttonLayout}>
      {confirmButtonContent && (
        <Button
          width={position}
          content={confirmButtonContent}
          style={BUTTON_COLOR.defaultButton}
          handleClick={confirmEvent}
        ></Button>
      )}
      {closeButtonContent && (
        <Button
          width={position}
          content={closeButtonContent}
          style={BUTTON_COLOR.closeButton}
          handleClick={handleClose}
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
  justify-content: flex-end;
`;

export default ButtonBox;
