import styles from './backdrop.module.css';

interface BackDropProps {
  onClick?: () => void;
}

export default function Backdrop({ onClick }: BackDropProps) {
  return <div className={styles.backDrop} onClick={onClick}></div>;
}
