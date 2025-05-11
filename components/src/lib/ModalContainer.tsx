import styled from 'styled-components';
import { useModalContext } from './ModalContext';

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
  const { position, width } = useModalContext();

  return (
    <StyledModalContainer position={position} width={width}>
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
`;
