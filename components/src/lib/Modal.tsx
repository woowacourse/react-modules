import ModalHeader from './ModalHeader';
import { ModalContainer } from './ModalStyle';

interface ModalProps {
  modalType: 'center' | 'bottom';
  titleText?: string;
  children: any;
  closeType: 'top' | 'bottom';
  onClose?: () => void;
}

const Modal = ({ modalType, titleText = '', children, closeType, onClose }: ModalProps) => {
  const hasHeaderCloseButton = closeType === 'top' ? true : false;
  return (
    <ModalContainer>
      <ModalHeader titleText={titleText} hasCloseButton={hasHeaderCloseButton}></ModalHeader>
      {children}
      {!hasHeaderCloseButton && <div>닫기</div>}
    </ModalContainer>
  );
};

export default Modal;
