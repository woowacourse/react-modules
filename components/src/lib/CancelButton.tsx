import styled from 'styled-components';

interface CancelButtonProps {
  onClick: () => void;
  width?: number;
}

function CancelButton({ onClick, width }: CancelButtonProps) {
  return (
    <StyledButton onClick={onClick} width={width}>
      취소
    </StyledButton>
  );
}

export default CancelButton;

type StyledButtonProps = Pick<CancelButtonProps, 'width'>;

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 36px;
  color: #333333bf;
  border: 1px solid #33333340;
  border-radius: 5px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
`;
