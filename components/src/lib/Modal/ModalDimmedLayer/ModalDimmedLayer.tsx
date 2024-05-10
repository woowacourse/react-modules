import { StyledDimmedLayer } from "./ModalDimmedLayer.styled";

interface ModalDimmedLayerProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ModalDimmedLayer = ({ onClick, children }: ModalDimmedLayerProps) => {
  return (
    <StyledDimmedLayer onClick={onClick}>
      {children}
    </StyledDimmedLayer>
  )
}

export default ModalDimmedLayer