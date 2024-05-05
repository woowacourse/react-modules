import styles from './styles.module.css';

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  style?: React.CSSProperties;
  customButton?: React.ReactNode;
  hide?: boolean;
}

const CloseButton = ({ style, customButton, hide, text, ...props }: CloseButtonProps) => {
  return (
    <>
      {!hide &&
        (customButton ?? (
          <button
            className={`${styles.modalButton} ${styles.closeButton}`}
            {...props}
            style={style}
          >
            {text ?? '취소'}
          </button>
        ))}
    </>
  );
};

export default CloseButton;
