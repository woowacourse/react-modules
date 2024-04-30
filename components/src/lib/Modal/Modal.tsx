import * as Styled from './Modal.styled';

import CLOSE_BUTTON from '../../asset/close-button.svg';
import { ModalProps } from '../../types/type';

const Modal = ({
  isOpened,
  closeModal,
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  firstButton,
  secondButton,
  buttonPosition = 'row',
  customStyle,
}: ModalProps) => {
  return (
    <Styled.DimmedLayer onClick={closeModal}>
      <Styled.ModalContainer modalPosition={modalPosition}>
        <Styled.ModalHeader>
          <Styled.ModalTitle>{title}</Styled.ModalTitle>
          <Styled.ModalCloseButton src={CLOSE_BUTTON} onClick={closeModal} />
        </Styled.ModalHeader>

        <Styled.ModalDescription>{description}</Styled.ModalDescription>
        <div>{children}</div>
        <div>
          {firstButton && (
            <button onClick={firstButton.onClick}>{firstButton.text}</button>
          )}
          {secondButton && (
            <button onClick={secondButton.onClick}>{secondButton.text}</button>
          )}
        </div>
      </Styled.ModalContainer>
    </Styled.DimmedLayer>
  );
};

export default Modal;
