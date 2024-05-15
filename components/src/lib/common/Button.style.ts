import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`;

export const StyledDarkButton = styled(StyledButton)`
  background: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.87);
  border: none;
`;

export const StyledLightButton = styled(StyledButton)`
  background: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.87);
  border: 1px solid rgba(51, 51, 51, 0.25);
`;
