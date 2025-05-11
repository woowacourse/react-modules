import ModalHeader from './ModalHeader';
import { useModal } from './contexts/ModalContext';
import { ModalBoxContainer, ModalBottomCloseBtn, ModalButtons } from './styles/ModalStyle';
import { ModalChildrenProps } from './types/modalTypes';

const ModalBox = ({ children }: ModalChildrenProps) => {
  const { modalPosition, modalSize, closeType, modalType, closeModalHandler, onClose } = useModal();

  const handleConfirm = () => {
    onClose?.();
    closeModalHandler();
  };

  const handleCancel = () => {
    closeModalHandler();
  };

  const renderModalButtons = () => {
    if (modalType === 'alert') {
      return (
        <ModalButtons>
          <button onClick={handleConfirm}>확인</button>
        </ModalButtons>
      );
    } else if (modalType === 'confirm' || modalType === 'prompt') {
      return (
        <ModalButtons>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleConfirm}>확인</button>
        </ModalButtons>
      );
    } else if (closeType === 'bottom') {
      return <ModalBottomCloseBtn onClick={closeModalHandler}>닫기</ModalBottomCloseBtn>;
    }
  };

  return (
    <ModalBoxContainer modalPosition={modalPosition} modalSize={modalSize}>
      <ModalHeader />
      {children}
      {renderModalButtons()}
    </ModalBoxContainer>
  );
};

export default ModalBox;
