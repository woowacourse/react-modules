import styles from './ModalContent.module.css';

interface ModalContentProps extends React.HTMLAttributes<HTMLElement> {}

const ModalContent = ({ style, children, ...rest }: React.PropsWithChildren<ModalContentProps>) => {
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
