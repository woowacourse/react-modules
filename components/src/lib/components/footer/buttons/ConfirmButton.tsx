import styles from './styles.module.css';

export interface ConfirmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  style?: React.CSSProperties;
  customButton?: React.ReactNode;
  hide?: boolean;
}

const ConfirmButton = ({ style, customButton, hide, text, ...props }: ConfirmButtonProps) => {
  return (
    <>
      {!hide &&
        (customButton ?? (
          <button
            className={`${styles.modalButton} ${styles.confirmButton}`}
            {...props}
            style={style}
          >
            {text ?? '확인'}
          </button>
        ))}
    </>
  );
};

export default ConfirmButton;
