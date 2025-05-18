import CloseIconSVG from './assets/CloseIconSVG';
import { ModalHeaderContainer } from './styles/ModalStyle';
import { ModalTitle } from './styles/ModalTextStyle';
import { useModalContext } from './contexts/ModalContext';
import { ModalCloseType } from './types/modalTypes';

interface ModalHeaderProps {
  titleText: string;
  closeType: ModalCloseType;
}

const ModalHeader = ({ titleText, closeType }: ModalHeaderProps) => {
  const { closeModalHandler, onClose } = useModalContext();
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
