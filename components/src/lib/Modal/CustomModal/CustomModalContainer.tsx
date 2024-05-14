import * as Styled from '../Modal.styled';

import { ModalPosition, ModalSize } from '../Modal';

export interface CustomModalContainerProps {
  isOpened: boolean;
  closeModal: () => void;

  /**
   * @defaultValue 'center'
   */
  modalPosition?: ModalPosition;

  /**
   * @defaultValue 'large'
   */
  size?: ModalSize;
}

const CustomModalContainer = ({
  isOpened,
  closeModal,
  modalPosition = 'center',
  size = 'large',
  children,
}: React.PropsWithChildren<CustomModalContainerProps>) => {
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
            {children}
          </Styled.ModalContainer>
        </Styled.DimmedLayer>
      )}
    </>
  );
};

export default CustomModalContainer;
