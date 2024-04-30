import styled from "styled-components";

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.div`
  height: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
