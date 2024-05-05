import styles from './ModalContent.module.css';

interface ModalContentProps extends React.HTMLAttributes<HTMLElement> {
  children?: JSX.Element;
}

const ModalContent = ({ style, children, ...rest }: ModalContentProps) => {
  if (!children) {
    return null;
  }

  return (
    <section className={styles.content} style={style} {...rest}>
      {children}
    </section>
  );
};

export default ModalContent;
