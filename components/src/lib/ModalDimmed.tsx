import styled from 'styled-components';

interface Props {
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
}

function ModalDimmed({ color, onClick }: Props) {
  return (
    <Dimmed
      color={color}
      onClick={onClick}
    />
  );
}
const Dimmed = styled.div`
  position: fixed;
  inset: 0;
  background: ${(props) => props.color || 'rgba(0, 0, 0, 0.35)'};
`;
export default ModalDimmed;
