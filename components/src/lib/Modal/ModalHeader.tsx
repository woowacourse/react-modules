import styled from "styled-components";

export interface ModalHeaderProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default ModalHeader;

const StyledHeader = styled.header`
  height: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
