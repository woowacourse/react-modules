import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  position: 'center' | 'right' | 'left';
}

function Button({ position, children }: ButtonProps) {
  return (
    <StyledButton position={position} className="button">
      {children}
    </StyledButton>
  );
}
export default Button;

type ButtonStyledProps = Pick<ButtonProps, 'position'>;
const StyledButton = styled.button<ButtonStyledProps>`
  border-radius: 5px;
  background: #333;
  width: ${(props) => (props.position === 'center' ? '100%' : `80px`)};
  height: 44px;
  font-size: 15px;
  text-align: center;
  color: #fff;
`;
