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
      {!closeButton?.customButton && <Button role="close" {...closeButton} />}
      {!confirmButton?.customButton && <Button role="confirm" {...confirmButton} />}
      {!closeButton?.hide && closeButton?.customButton}
      {!confirmButton?.hide && confirmButton?.customButton}
    </footer>
  );
};

export default ModalFooter;
