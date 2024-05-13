import CLOSE_BUTTON from '../../../asset/close-button.svg';
import { StyledModalCloseButton } from './ModalCloseButton.styled';

interface ModalCloseButtonProps {
  onClick: () => void
}

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {

  return (
    <StyledModalCloseButton
      src={CLOSE_BUTTON}
      onClick={onClick}
    />
  )
}

export default ModalCloseButton;
