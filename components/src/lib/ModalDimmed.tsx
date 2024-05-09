import styled from 'styled-components';

export interface ModalDimmedProps {
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ModalDimmed: React.FC<ModalDimmedProps> = ({
  color,
  onClick,
}: ModalDimmedProps) => {
  return (
    <Dimmed
      color={color}
      onClick={onClick}
    />
  );
};
const Dimmed = styled.div`
  position: fixed;
  inset: 0;
  background: ${(props) => props.color || 'rgba(0, 0, 0, 0.35)'};
`;
export default ModalDimmed;
