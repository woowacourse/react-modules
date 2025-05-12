import { ComponentProps } from 'react';
import styled from 'styled-components';
import { useModal } from './ModalProvider';

interface ConfirmButtonProps {
  onClick?: () => void;
  width?: number;
}

function ConfirmButton({
  onClick,
  width,
  ...rest
}: ConfirmButtonProps & ComponentProps<'button'>) {
  const { setOpen } = useModal();

  return (
    <StyledButton
      onClick={() => {
        setOpen(false);
        onClick?.();
      }}
      width={width}
      {...rest}
    >
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
