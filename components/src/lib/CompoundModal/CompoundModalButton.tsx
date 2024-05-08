import { ButtonTheme } from '../types/type';
import COLOR_HEXES from '../constants/colorHexes';
import styled from '@emotion/styled';
import useCompoundModalContext from './useCompoundModalContext';

interface CompoundModalButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isCloseButton?: boolean;
  isConfirmButton?: boolean;
  isCancelButton?: boolean;
  buttonTheme?: ButtonTheme;
}
const getOnClick = ({
  isCloseButton,
  isConfirmButton,
  isCancelButton,
}: CompoundModalButtonProps) => {
  const { onClose, onConfirm, onCancel } = useCompoundModalContext();
  if (isCloseButton) return onClose;
  if (isConfirmButton) return onConfirm;
  if (isCancelButton) return onCancel;
  return onClose;
};

export default function CompoundModalButton(props: CompoundModalButtonProps) {
  const { buttonTheme = 'primary', children } = props;
  const onClick = getOnClick(props);

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
    border:
      buttonTheme === 'secondary'
        ? `1px solid ${COLOR_HEXES.grayTransParent1}`
        : undefined,
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
