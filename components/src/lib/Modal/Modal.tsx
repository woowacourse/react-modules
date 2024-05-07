import * as Styled from './Modal.styled';

import { ButtonSize, ButtonStyle, ButtonWidth } from '../Button/Button';

import Button from '../Button/Button';
import CLOSE_BUTTON from '../../asset/close-button.svg';
import useBlockedScroll from '../hooks/useBlockedScroll';
import useEscKeyDown from '../hooks/useEscKeyDown';

export type ModalSize = 'small' | 'medium' | 'large';
export type ModalPosition = 'center' | 'bottom';
export type ButtonPosition = 'row' | 'column';

export interface ModalProps {
  isOpened: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  size?: ModalSize;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: ButtonSize;
  width?: ButtonWidth;
  buttonStyle?: ButtonStyle;
  primaryColor?: string;
}

const Modal = ({
  isOpened,
  closeModal,
  title = '',
  description = '',
  size = 'large',
  children,
  modalPosition = 'center',
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
}: ModalProps) => {
  useBlockedScroll(isOpened);
  useEscKeyDown(closeModal);

  return (
    <>
      {isOpened && (
        <Styled.DimmedLayer onClick={closeModal}>
          <Styled.ModalContainer
            modalPosition={modalPosition}
            size={size}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Styled.ModalHeader>
              <Styled.ModalTitle>{title}</Styled.ModalTitle>
              {showCloseButton && (
                <Styled.ModalCloseButton
                  src={CLOSE_BUTTON}
                  onClick={closeModal}
                />
              )}
            </Styled.ModalHeader>
            <Styled.ModalBody>
              <Styled.ModalDescription>{description}</Styled.ModalDescription>
              <div>{children}</div>
            </Styled.ModalBody>
            <Styled.ButtonContainer buttonPosition={buttonPosition}>
              {primaryButton && (
                <Button
                  text={primaryButton.text}
                  onClick={primaryButton.onClick}
                  size={primaryButton.size || 'medium'}
                  width={primaryButton.width || 'full'}
                  buttonStyle={primaryButton.buttonStyle || 'primary'}
                  primaryColor={
                    primaryColor || primaryButton.primaryColor || '#333333'
                  }
                />
              )}
              {secondaryButton && (
                <Button
                  text={secondaryButton.text}
                  onClick={secondaryButton.onClick || closeModal}
                  size={secondaryButton.size || 'medium'}
                  width={secondaryButton.width || 'full'}
                  buttonStyle={secondaryButton.buttonStyle || 'border'}
                  primaryColor={
                    primaryColor || secondaryButton.primaryColor || '#333333'
                  }
                />
              )}
            </Styled.ButtonContainer>
          </Styled.ModalContainer>
        </Styled.DimmedLayer>
      )}
    </>
  );
};

export default Modal;
