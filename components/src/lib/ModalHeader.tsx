import CloseIconSVG from './assets/CloseIconSVG';
import { ModalHeaderContainer } from './styles/ModalStyle';
import { ModalTitle } from './styles/ModalTextStyle';
import { useModal } from './contexts/ModalContext';

const ModalHeader = () => {
  const { titleText, closeType, closeModalHandler, onClose } = useModal();
  const hasCloseButton = closeType === 'top' ? true : false;

  function closeHandler() {
    onClose?.();
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
