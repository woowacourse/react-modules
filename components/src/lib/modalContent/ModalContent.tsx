import styles from './ModalContent.module.css';

interface ModalContentProps {
  style?: React.CSSProperties;
  children?: JSX.Element;
}

const ModalContent = ({ style, children }: ModalContentProps) => {
  if (!children) {
    return null;
  }

  return (
    <section className={styles.content} style={style}>
      {children}
    </section>
  );
};

export default ModalContent;
