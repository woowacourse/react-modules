import styled from "styled-components";

export interface BackDropProps {
  onClose: () => void;
}

const ModalBackDrop = ({ onClose }: BackDropProps) => {
  return <StyledModalBackDrop onClick={onClose} />;
};

export default ModalBackDrop;

const StyledModalBackDrop = styled.div`
  position: absolute;
  width: 100%;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.35);
`;
