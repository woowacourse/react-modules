import { StyledDimmedLayer } from "./ModalDimmedLayer.styled";

interface ModalDimmedLayerProps {
  onClick: () => void;
  zIndex: number;
  children: React.ReactNode;
}

const ModalDimmedLayer = ({ onClick, zIndex, children }: ModalDimmedLayerProps) => {
  return (
    <StyledDimmedLayer onClick={onClick} zIndex={zIndex}>
      {children}
    </StyledDimmedLayer>
  )
}

export default ModalDimmedLayer