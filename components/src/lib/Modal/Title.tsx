import styled from "styled-components";

export interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;
