import styled from 'styled-components';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';

interface AlertActionsProps {
  onCancelClick: () => void;
  onConfirmClick: () => void;
  width?: number;
}

function AlertActions({
  onCancelClick,
  onConfirmClick,
  width,
}: AlertActionsProps) {
  return (
    <Wrapper width={width}>
      <CancelButton onClick={onCancelClick} />
      <ConfirmButton onClick={onConfirmClick} />
    </Wrapper>
  );
}

export default AlertActions;

type WrapperProps = Pick<AlertActionsProps, 'width'>;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 12px;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  float: right;
  margin-top: 22px;
`;
