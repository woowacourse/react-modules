import { ButtonTheme } from '../types/type';
import COLOR_HEXES from '../constants/colorHexes';
import styled from '@emotion/styled';
import useCompoundModalContext from './useCompoundModalContext';

interface CompoundModalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isCloseButton: boolean;
  buttonTheme?: ButtonTheme;
}

export default function CompoundModalButton({
  isCloseButton,
  buttonTheme = 'primary',
  children,
}: CompoundModalButtonProps) {
  const { onClose, onConfirm } = useCompoundModalContext();

  const onClick = isCloseButton ? onClose : onConfirm;

  return (
    <Button buttonTheme={buttonTheme} onClick={onClick}>
      {children}
    </Button>
  );
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonTheme: ButtonTheme;
}

const Button = styled.button<ButtonProps>(({ buttonTheme }) => {
  const backgroundColor =
    buttonTheme === 'primary' ? COLOR_HEXES.gray1 : COLOR_HEXES.white;
  const color =
    buttonTheme === 'primary' ? COLOR_HEXES.white : COLOR_HEXES.gray1;
  return {
    width: '100%',
    height: '44px',
    backgroundColor,
    border: '1px solid',
    borderRadius: '5px',

    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '21.72px',
    alignItems: 'center',
    color,
    marginTop: '10px',
    cursor: 'pointer',
  };
});
