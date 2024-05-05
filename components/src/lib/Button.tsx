import styled from "styled-components";

type Style = {
  backgroundColor: string;
  fontColor: string;
};
interface Props {
  content: string;
  handleClick: (e: React.MouseEvent) => void;
  style?: Style;
}
const Button = ({
  content = "",
  handleClick,
  style = { backgroundColor: "black", fontColor: "white" },
}: Props) => {
  return (
    <StyledButton $style={style} onClick={(e) => handleClick(e)}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $style: Style }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$style.backgroundColor};
  color: ${(props) => props.$style.fontColor};
  width: 100%;
  padding: 7px 0;
  border-radius: 5px;

  font-size: 16px;
  border: 1px solid #8b95a1;
`;

export default Button;
