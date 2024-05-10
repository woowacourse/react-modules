import { extendClassNames } from '@utils/extendClassNames';
import { convertPascalCase } from '@utils/string';

import { FlexDirection } from '../../Modal.type';

import styles from './ModalFooter.module.css';

export type ModalFooterType = React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLElement> & { direction?: FlexDirection }>
>;

const ModalFooter: ModalFooterType = ({ children, direction = 'row', className }) => {
  const footerRowClassName = styles[`footer${convertPascalCase(direction)}`];
  return (
    <footer className={extendClassNames(styles.modalFooter, footerRowClassName, className)}>
      <div className={extendClassNames(styles.modalFooterChildrenContainer, styles[direction])}>{children}</div>
    </footer>
  );
};

export default ModalFooter;
