import Button, { ButtonProps } from '../Button/Button';
import Modal, { DefaultModalProps } from './Modal';
import { createPortal } from 'react-dom';

interface CustomModalProps extends DefaultModalProps {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

const CustomModal = ({
  size = 'small',
  isOpened,
  onClose,
  title = '',
  description = '',
  children,
  modalPosition = 'center',
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  primaryColor,
  showCloseButton = false,
}: CustomModalProps) => {

  return createPortal(
    <>
      {isOpened && (
        <Modal.DimmedLayer onClick={onClose} isOpened={isOpened} onClose={onClose}>
          <Modal.Container
            size={size}
            modalPosition={modalPosition}
          >
            <Modal.Header>
              <Modal.Title title={title} />
              {showCloseButton && <Modal.CloseButton onClick={onClose} />}
            </Modal.Header>
            <Modal.Body>
              <Modal.Description description={description} />
              <>{children}</>
            </Modal.Body>
            <Modal.ButtonContainer buttonPosition={buttonPosition}>
              {primaryButton && (
                <Button
                  text={primaryButton.text}
                  onClick={primaryButton.onClick}
                  size={primaryButton.size ?? 'small'}
                  width={primaryButton.width ?? 'full'}
                  buttonStyle={primaryButton.buttonStyle ?? 'primary'}
                  primaryColor={
                    primaryColor ?? primaryButton.primaryColor ?? '#333333'
                  }
                />
              )}
              {secondaryButton && (
                <Button
                  text={secondaryButton.text}
                  onClick={secondaryButton.onClick ?? onClose}
                  size={secondaryButton.size ?? 'small'}
                  width={secondaryButton.width ?? 'full'}
                  buttonStyle={secondaryButton.buttonStyle ?? 'border'}
                  primaryColor={
                    primaryColor ?? secondaryButton.primaryColor ?? '#333333'
                  }
                />
              )}
            </Modal.ButtonContainer>
          </Modal.Container>
        </Modal.DimmedLayer>
      )}
    </>
    , document.body);
};

export default CustomModal;
