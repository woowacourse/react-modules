import * as Styled from "./style";

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <Styled.Header>{children}</Styled.Header>;
};

export default Header;
