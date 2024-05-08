import * as Styled from './Modal.styled';

import { ButtonJustifyContent, ButtonPosition, ButtonProps } from './Modal';

import { Button } from '..';

export interface ModalFooterProps {
  closeModal: () => void;

  primaryColor?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  buttonJustifyContent?: ButtonJustifyContent;
}

const ModalFooter = ({
  closeModal,
  primaryColor,
  primaryButton,
  secondaryButton,
  buttonPosition = 'row',
  buttonJustifyContent = 'center',
}: ModalFooterProps) => {
  return (
    <Styled.ButtonContainer
      buttonPosition={buttonPosition}
      buttonJustifyContent={buttonJustifyContent}
    >
      {primaryButton && (
        <Button
          text={primaryButton.text}
          onClick={primaryButton.onClick}
          size={primaryButton.size || 'medium'}
          width={primaryButton.width || 'full'}
          buttonStyle={primaryButton.buttonStyle || 'primary'}
          primaryColor={primaryColor || primaryButton.primaryColor || '#333333'}
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
  );
};

export default ModalFooter;
