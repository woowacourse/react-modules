import * as Styled from "./style";

export interface BackDropProps {
  onClose: () => void;
}

const BackDrop = ({ onClose }: BackDropProps) => {
  return <Styled.BackDrop onClick={onClose} />;
};

export default BackDrop;
