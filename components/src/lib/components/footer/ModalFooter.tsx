import styles from './ModalFooter.module.css';
import CloseButton from './buttons/CloseButton';
import ConfirmButton from './buttons/ConfirmButton';

type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const BUTTON_POSITION_TYPE: Record<ButtonPosition, string> = {
  row: styles.buttonRow,
  'row-reverse': styles.buttonRowReverse,
  column: styles.buttonColumn,
  'column-reverse': styles.buttonColumnReverse,
};

interface ModalFooterProps {
  buttonPosition?: ButtonPosition;
  customCloseButton?: React.ReactNode;
  closeButtonText?: string;
  closeButtonStyle?: React.CSSProperties;
  customConfirmButton?: React.ReactNode;
  confirmButtonText?: string;
  confirmButtonStyle?: React.CSSProperties;
  hideCloseButton?: boolean;
  hideConfirmButton?: boolean;
}

const ModalFooter = ({
  buttonPosition,
  customCloseButton,
  closeButtonText,
  closeButtonStyle,
  customConfirmButton,
  confirmButtonText,
  confirmButtonStyle,
  hideCloseButton = false,
  hideConfirmButton = false,
}: ModalFooterProps) => {
  const buttonLayoutStyle = buttonPosition
    ? BUTTON_POSITION_TYPE[buttonPosition]
    : styles.buttonRow;

  return (
    <footer className={buttonLayoutStyle}>
      {!hideCloseButton &&
        (customCloseButton ?? (
          <CloseButton style={closeButtonStyle}>{closeButtonText ?? '닫기'}</CloseButton>
        ))}
      {!hideConfirmButton &&
        (customConfirmButton ?? (
          <ConfirmButton style={confirmButtonStyle}>{confirmButtonText ?? '확인'}</ConfirmButton>
        ))}
    </footer>
  );
};

export default ModalFooter;
