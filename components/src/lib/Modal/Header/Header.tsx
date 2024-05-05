import * as Styled from "./style";

export interface HeaderProps {
  children: JSX.Element;
}

const Header = ({ children }: HeaderProps) => {
  return <Styled.Header>{children}</Styled.Header>;
};

export default Header;
