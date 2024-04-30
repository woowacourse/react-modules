import styled from 'styled-components';
import Button from './Button';
import { BUTTON_COLOR } from './constant/color';

interface Props {
  buttonLayout?: string;
  closeButtonContent?: string;
  confirmButtonContent?: string;
  confirmEvent?: (e:React.MouseEvent) => void;
  closeModal:(e:React.MouseEvent) => void;
}
const ButtonBox = ({
  buttonLayout,
  closeButtonContent,
  confirmButtonContent,
  confirmEvent,
  closeModal
}: Props) => {
  return <ButtonContainer $buttonLayout={buttonLayout}>
    {confirmButtonContent&&<Button content={confirmButtonContent} style={BUTTON_COLOR.defaultButton} handleClick={confirmEvent}></Button>}
    {closeButtonContent&&<Button content={closeButtonContent} style={BUTTON_COLOR.closeButton} handleClick={closeModal}></Button>}
  </ButtonContainer>;
};

const ButtonContainer = styled.div<{ $buttonLayout?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$buttonLayout};
  background-color: white;
  gap: 12px;

  border-radius: 8px;
`;

export default ButtonBox;
