import styles from './ModalFooter.module.css';
import Button, { ButtonProps } from './button/Button';

export type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const BUTTON_POSITION_TYPE: Record<ButtonPosition, string> = {
  row: styles.buttonRow,
  'row-reverse': styles.buttonRowReverse,
  column: styles.buttonColumn,
  'column-reverse': styles.buttonColumnReverse,
};

export interface ModalFooterProps {
  style?: React.CSSProperties;
  buttonPosition?: ButtonPosition;
  closeButton?: ButtonProps;
  confirmButton?: ButtonProps;
}

const ModalFooter = ({ buttonPosition, closeButton, confirmButton, style }: ModalFooterProps) => {
  const buttonLayoutStyle = buttonPosition
    ? BUTTON_POSITION_TYPE[buttonPosition]
    : styles.buttonRow;

  return (
    <footer className={buttonLayoutStyle} style={style}>
      <Button role="close" {...closeButton} />
      <Button role="confirm" {...confirmButton} />
    </footer>
  );
};

export default ModalFooter;
