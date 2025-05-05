import CloseIconSVG from './assets/CloseIconSVG';
import { ModalHeaderContainer } from './styles/ModalStyle';
import { ModalTitle } from './styles/ModalTextStyle';
import { useModal } from './contexts/ModalContext';
import { ModalHeaderProps } from './types/modalTypes';

const ModalHeader = ({ titleText, hasCloseButton, onClose }: ModalHeaderProps) => {
  const { closeModalHandler } = useModal();
  function closeHandler() {
    if (onClose) onClose();
    closeModalHandler();
  }
  return (
    <ModalHeaderContainer>
      <ModalTitle>{titleText}</ModalTitle>
      {hasCloseButton && (
        <button style={{ cursor: 'pointer' }} type="button" onClick={closeHandler}>
          <CloseIconSVG sizeName={'md'}></CloseIconSVG>
        </button>
      )}
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
