import { extendClassNames } from '../../../../../utils/extendClassNames';

import styles from './ModalContent.module.css';

export type ModalContentType = React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>>;

const ModalContent: ModalContentType = ({ children, className, ...rest }) => {
  return (
    <section className={extendClassNames(styles.modalContent, className)} {...rest}>
      {children}
    </section>
  );
};

export default ModalContent;
