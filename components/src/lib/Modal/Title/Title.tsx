import * as Styled from "./style";

export interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Styled.Title>{text}</Styled.Title>;
};

export default Title;
