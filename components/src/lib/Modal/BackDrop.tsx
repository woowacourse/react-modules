import styled from "styled-components";

export interface BackDropProps {
  onClose: () => void;
}

const BackDrop = ({ onClose }: BackDropProps) => {
  return <StyledBackDrop onClick={onClose} />;
};

export default BackDrop;

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.35);
`;
