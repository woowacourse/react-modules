import styled from 'styled-components';

interface ModalOverlayProps {
  onClick: () => void;
}

function ModalOverlay({ onClick }: ModalOverlayProps) {
  return <StyledModalOverlay onClick={onClick} />;
}

export default ModalOverlay;

const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;
