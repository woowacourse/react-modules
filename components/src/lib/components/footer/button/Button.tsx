import styles from './styles.module.css';

type ButtonRole = 'confirm' | 'close';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role: ButtonRole;
  text?: string;
  style?: React.CSSProperties;
  customButton?: React.ReactNode;
  hide?: boolean;
}

type ButtonSetting = {
  style: string;
  defaultText: string;
};

const BUTTON_SETTING_BY_ROLE: Record<ButtonRole, ButtonSetting> = {
  confirm: {
    style: styles.confirmButton,
    defaultText: '확인',
  },
  close: {
    style: styles.closeButton,
    defaultText: '취소',
  },
};

const Button = ({ style, hide, text, role, ...props }: ButtonProps) => {
  if (hide) return;

  return (
    <button
      className={`${styles.modalButton} ${BUTTON_SETTING_BY_ROLE[role].style}`}
      {...props}
      style={style}
    >
      {text ?? BUTTON_SETTING_BY_ROLE[role].defaultText}
    </button>
  );
};

export default Button;
