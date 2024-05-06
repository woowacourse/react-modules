import styled from "styled-components";

export interface BackDropProps {
  onClose: () => void;
}

const ModalBackDrop = ({ onClose }: BackDropProps) => {
  return <StyledModalBackDrop onClick={onClose} />;
};

export default ModalBackDrop;

const StyledModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.35);
`;
