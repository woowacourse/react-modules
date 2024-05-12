import { ButtonTheme } from '../types/type';
import COLOR_HEXES from '../constants/colorHexes';
import styled from '@emotion/styled';
import useCompoundModalContext from './useCompoundModalContext';

interface CompoundModalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  closeButton?: boolean;
  onClick?: () => void;
  buttonTheme?: ButtonTheme;
}
export default function CompoundModalButton(props: CompoundModalButtonProps) {
  const { buttonTheme = 'primary', children, onClick } = props;

  const { onClose } = useCompoundModalContext();

  return (
    <Button buttonTheme={buttonTheme} onClick={onClick ?? onClose}>
      {children}
    </Button>
  );
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonTheme: ButtonTheme;
}

const buttonStyle: Record<ButtonTheme, object> = {
  primary: { backgroundColor: COLOR_HEXES.gray1, color: COLOR_HEXES.white },
  secondary: {
    backgroundColor: COLOR_HEXES.white,
    color: COLOR_HEXES.grayTransParent2,
  },
};
const Button = styled.button<ButtonProps>(({ buttonTheme }) => {
  return {
    width: '100%',
    height: '44px',
    border:
      buttonTheme === 'secondary'
        ? `1px solid ${COLOR_HEXES.grayTransParent1}`
        : '0',
    borderRadius: '5px',

    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '21.72px',
    alignItems: 'center',
    marginTop: '10px',
    cursor: 'pointer',
    ...buttonStyle[buttonTheme],
  };
});
