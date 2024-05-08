import CLOSE_BUTTON from '../../../asset/close-button.svg';
import { StyledModalCloseButton } from './ModalCloseButton.styled';

interface ModalCloseButtonProps {
  showCloseButton: boolean;
  onClick: () => void
}

const ModalCloseButton = ({ showCloseButton, onClick }: ModalCloseButtonProps) => {

  return (<>
    {showCloseButton && (
      <StyledModalCloseButton
        src={CLOSE_BUTTON}
        onClick={onClick}
      />
    )}
  </>
  )
}

export default ModalCloseButton;
