import styles from './ModalFooter.module.css';

type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const BUTTON_POSITION_TYPE: Record<ButtonPosition, string> = {
  row: styles.buttonRow,
  'row-reverse': styles.buttonRowReverse,
  column: styles.buttonColumn,
  'column-reverse': styles.buttonColumnReverse,
};

interface ModalFooterProps {
  buttonPosition?: ButtonPosition;
  closeButton?: React.ReactNode;
  confirmButton?: React.ReactNode;
}

const ModalFooter = ({ buttonPosition, closeButton, confirmButton }: ModalFooterProps) => {
  const buttonLayoutStyle = buttonPosition
    ? BUTTON_POSITION_TYPE[buttonPosition]
    : styles.buttonRow;

  return (
    <footer className={buttonLayoutStyle}>
      {closeButton}
      {confirmButton}
    </footer>
  );
};

export default ModalFooter;
