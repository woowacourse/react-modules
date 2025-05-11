import { ComponentProps } from 'react';
import styled from 'styled-components';

interface ConfirmButtonProps {
  onClick: () => void;
  width?: number;
}

function ConfirmButton({
  onClick,
  width,
}: ConfirmButtonProps & ComponentProps<'button'>) {
  return (
    <StyledButton onClick={onClick} width={width}>
      확인
    </StyledButton>
  );
}

export default ConfirmButton;

type StyledButtonProps = Pick<ConfirmButtonProps, 'width'>;

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 36px;
  color: white;
  border: 1px solid #333333;
  border-radius: 5px;
  font-weight: bold;
  background-color: #333333;
  cursor: pointer;
  float: right;
`;
