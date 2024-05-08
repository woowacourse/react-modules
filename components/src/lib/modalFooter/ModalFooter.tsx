import styles from './ModalFooter.module.css';

const FOOTER_POSITION_TYPE: Record<ContainerPosition, string> = {
  row: styles.row,
  'row-reverse': styles.rowReverse,
  column: styles.column,
  'column-reverse': styles.columnReverse,
};

type ContainerPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexAlign =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type ContainerRowAlign = FlexAlign;
type ContainerColAlign = FlexAlign;

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  position?: ContainerPosition;
  justifyContent?: ContainerRowAlign;
  alignItems?: ContainerColAlign;
}

const Container = ({
  position = 'column',
  justifyContent,
  alignItems,
  children,
  ...rest
}: React.PropsWithChildren<ContainerProps>) => {
  const rowAlign = justifyContent || 'space-between';
  const colAlign = alignItems || 'center';

  return (
    <footer
      className={FOOTER_POSITION_TYPE[position]}
      style={{ justifyContent: rowAlign, alignItems: colAlign }}
      {...rest}
    >
      {children}
    </footer>
  );
};

export default Container;
