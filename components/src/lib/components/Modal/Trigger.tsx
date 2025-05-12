import styled from 'styled-components';
import { useModal } from './ModalProvider';

interface TriggerProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  styleProps?: React.CSSProperties;
}

function Trigger({ children, styleProps, type = 'button' }: TriggerProps) {
  const { setOpen } = useModal();
  const handleClick = () => setOpen(true);

  return (
    <StyledButton type={type} styleProps={styleProps} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

export default Trigger;

const StyledButton = styled.button.attrs<{ styleProps?: React.CSSProperties }>(
  (props) => ({
    style: props.styleProps,
  })
)`
  height: 36px;
  padding: 0px 12px;
  color: white;
  border: 1px solid #333333;
  border-radius: 5px;
  font-weight: bold;
  background-color: #333333;
  cursor: pointer;
`;
