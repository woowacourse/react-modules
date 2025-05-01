import ModalHeader from './ModalHeader';
import { useModal } from './contexts/ModalContext';
import { ModalBoxContainer, ModalBottomCloseBtn } from './styles/ModalStyle';
import { ModalProps } from './types/modalTypes';

const ModalBox = ({ modalType, titleText = '', children, closeType, onClose }: ModalProps) => {
  const hasHeaderCloseButton = closeType === 'top' ? true : false;
  const { closeModalHandler } = useModal();
  return (
    <ModalBoxContainer modalType={modalType}>
      <ModalHeader titleText={titleText} hasCloseButton={hasHeaderCloseButton} onClose={onClose} />
      {children}
      {!hasHeaderCloseButton && (
        <ModalBottomCloseBtn onClick={closeModalHandler}>닫기</ModalBottomCloseBtn>
      )}
    </ModalBoxContainer>
  );
};

export default ModalBox;
