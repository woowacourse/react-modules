import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button className={styles['modal-button']} onClick={onClick}>
      Click to Open Modal
    </button>
  );
};

export default Button;
