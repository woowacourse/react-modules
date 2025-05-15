import {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import PrimaryButton from '../button/PrimaryButton';
import SecondaryButton from '../button/SecondaryButton';
import { ModalProps } from './types';
import Input from '../input/Input';
import useFocusTrap from '../hooks/useFocus';
import {
  ModalWrapper,
  StyledModalContainer,
  StyledCloseButton,
  StyledTitle,
} from './Modal.styles';

function ModalContainer({
  open,
  onClose,
  position = 'center',
  size = 'medium',
  style,
  children,
}: PropsWithChildren<ModalProps>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [open]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  };

  const { setRef, handleKeyDownTab } = useFocusTrap(open);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal || !open) {
      return;
    }

    setRef(modal);
  }, [open, setRef]);

  return (
    <StyledModalContainer
      onClick={handleClickOutside}
      onClose={onClose}
      onKeyDown={handleKeyDownTab}
      position={position}
      size={size}
      style={style}
      ref={modalRef}
    >
      <ModalWrapper position={position}>{children}</ModalWrapper>
    </StyledModalContainer>
  );
}

function CloseButton({
  style,
  onClose,
}: {
  style?: CSSProperties;
  onClose: () => void;
}) {
  return (
    <StyledCloseButton type="button" style={style} onClick={onClose}>
      <img
        src={new URL('./assets/close-button.png', import.meta.url).href}
        alt="모달 닫기 버튼"
      />
    </StyledCloseButton>
  );
}

function Title({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  return <StyledTitle style={style}>{children}</StyledTitle>;
}

export default {
  Container: ModalContainer,
  CloseButton,
  Title,
  PrimaryButton,
  SecondaryButton,
  Input,
};
