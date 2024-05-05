import styles from './ModalFooter.module.css';
import CloseButton, { CloseButtonProps } from './buttons/CloseButton';
import ConfirmButton, { ConfirmButtonProps } from './buttons/ConfirmButton';

type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const BUTTON_POSITION_TYPE: Record<ButtonPosition, string> = {
  row: styles.buttonRow,
  'row-reverse': styles.buttonRowReverse,
  column: styles.buttonColumn,
  'column-reverse': styles.buttonColumnReverse,
};

interface ModalFooterProps {
  style?: React.CSSProperties;
  buttonPosition?: ButtonPosition;
  closeButton?: CloseButtonProps;
  confirmButton?: ConfirmButtonProps;
}

const ModalFooter = ({ buttonPosition, closeButton, confirmButton, style }: ModalFooterProps) => {
  const buttonLayoutStyle = buttonPosition
    ? BUTTON_POSITION_TYPE[buttonPosition]
    : styles.buttonRow;

  return (
    <footer className={buttonLayoutStyle} style={style}>
      <CloseButton {...closeButton} />
      <ConfirmButton {...confirmButton} />
    </footer>
  );
};

export default ModalFooter;
