import styled from "styled-components";

type ContainerPositionType = "top" | "bottom" | "center";

export interface ModalContentProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  position?: ContainerPositionType;
}

const ModalContent = ({ position = "center", children }: ModalContentProps) => {
  return <StyledContent $position={position}>{children}</StyledContent>;
};

export default ModalContent;

const POSITION_STYLES = {
  top: `
    top: 0;
    width: 100%;
    
    border-radius: 0px 0px 10px 10px;
    `,
  center: `
    width: 100%;
    max-width: 640px;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    border-radius: 8px;
    `,
  bottom: `
    top: 100%;
    transform: translateY(-100%);

    width: 100%;
  
    border-radius: 10px 10px 0px 0px;
    `,
};

const StyledContent = styled.div<{ $position: ContainerPositionType }>`
  position: absolute;

  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  background-color: #ffffff;
  ${({ $position }) => POSITION_STYLES[$position]};
`;
