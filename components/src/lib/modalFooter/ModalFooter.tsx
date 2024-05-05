import styles from './ModalFooter.module.css';

const FOOTER_POSITION_TYPE: Record<ContainerPosition, string> = {
  row: styles.row,
  'row-reverse': styles.rowReverse,
  column: styles.column,
  'column-reverse': styles.columnReverse,
};

type ContainerPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  position?: ContainerPosition;
}

const Container = ({
  position = 'column',
  children,
  ...rest
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <footer className={FOOTER_POSITION_TYPE[position]} {...rest}>
      {children}
    </footer>
  );
};

export default Container;
