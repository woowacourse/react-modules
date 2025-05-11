import styled from 'styled-components';
import { useModalContext } from './ModalContext';
import useFocus from '../useFocus';

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
    <StyledModalContainer ref={modalRef} position={position} width={width} onKeyDown={handleKeyDown} tabIndex={-1}>
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
  outline: none; // 포커스 스타일이 겹치지 않도록 제거
`;
