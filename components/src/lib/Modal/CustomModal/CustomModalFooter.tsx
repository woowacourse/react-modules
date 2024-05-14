import { ButtonJustifyContent, ButtonPosition } from '../Modal';

import { ButtonContainer } from '../Modal.styled';

export interface CustomModalFooter {
  /**
   * @defaultValue 'row'
   * @remarks type ButtonPosition = "row" | "column"
   */
  buttonPosition?: ButtonPosition;

  /**
   * @defaultValue 'right'
   * @remarks type ButtonJustifyContent = "center" | "left" | "right"
   */
  buttonJustifyContent?: ButtonJustifyContent;
}

const CustomModalFooter = ({
  children,
  buttonPosition = 'row',
  buttonJustifyContent = 'right',
}: React.PropsWithChildren<CustomModalFooter>) => {
  return (
    <ButtonContainer
      buttonPosition={buttonPosition}
      buttonJustifyContent={buttonJustifyContent}
    >
      {children}
    </ButtonContainer>
  );
};

export default CustomModalFooter;
