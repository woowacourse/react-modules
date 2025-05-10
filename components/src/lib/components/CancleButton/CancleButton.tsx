import styled from "@emotion/styled";

type CancleButtonProps = {
  onClick: () => void;
};

const CancleButton = ({ onClick }: CancleButtonProps) => {
  return <StyledButton onClick={onClick}>취소</StyledButton>;
};

export default CancleButton;

const StyledButton = styled.button`
  width: 80px;
  height: 36px;
  border-radius: 5px;
  background: #fff;
  border: 1.5px solid rgba(51, 51, 51, 0.25);
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  color: rgba(51, 51, 51, 0.75);
`;
