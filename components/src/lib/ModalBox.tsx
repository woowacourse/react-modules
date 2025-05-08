import ModalHeader from './ModalHeader';
import { useModal } from './contexts/ModalContext';
import { ModalBoxContainer, ModalBottomCloseBtn } from './styles/ModalStyle';
import { ModalChildrenProps } from './types/modalTypes';

const ModalBox = ({ children }: ModalChildrenProps) => {
  const { modalType, closeType, closeModalHandler } = useModal();
  const hasHeaderCloseButton = closeType === 'top' ? true : false;

  return (
    <ModalBoxContainer modalType={modalType}>
      <ModalHeader />
      {children}
      {!hasHeaderCloseButton && (
        <ModalBottomCloseBtn onClick={closeModalHandler}>닫기</ModalBottomCloseBtn>
      )}
    </ModalBoxContainer>
  );
};

export default ModalBox;
