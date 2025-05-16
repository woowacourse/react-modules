import styled from 'styled-components';
import { useModalContext } from './ModalContext';
import useFocus from './useFocus';

const radius = {
  top: '0px 0px 8px 8px',
  center: '8px',
  bottom: '8px 8px 0px 0px',
};

const widthMap = {
  small: '320px',
  medium: '480px',
  large: '600px',
};

function ModalContainer({ children }: { children: React.ReactNode }) {
  const { isOpen, position, width, onClose } = useModalContext();
  const { modalRef } = useFocus(isOpen);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <StyledModalContainer
      ref={modalRef}
      position={position}
      width={width}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {children}
    </StyledModalContainer>
  );
}

export default ModalContainer;

interface StyledModalContainerProps {
  position: 'top' | 'bottom' | 'center';
  width: 'small' | 'medium' | 'large';
}

const StyledModalContainer = styled.div<StyledModalContainerProps>`
  width: ${(props) => widthMap[props.width]};
  padding: 24px 32px;
  background: #fff;
  border-radius: ${(props) => radius[props.position]};
  outline: none;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.position === 'top' &&
    `
      top: 0;
      transform: translate(-50%, 0);
    `}

  ${(props) =>
    props.position === 'bottom' &&
    `
      bottom: 0;
      transform: translate(-50%, 0);
    `}

  ${(props) =>
    props.position === 'center' &&
    `
      top: 50%;
      transform: translate(-50%, -50%);
    `}
`;
