import styles from './ModalTitle.module.css';

interface ModalTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  title?: string;
}

const ModalTitle = ({ title }: ModalTitleProps) => {
  return <span className={styles.title}>{title && title}</span>;
};

export default ModalTitle;
