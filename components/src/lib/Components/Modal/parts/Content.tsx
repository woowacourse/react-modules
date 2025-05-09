import { ComponentProps } from "react";
import styles from "../styles/ModalContent.module.css";
interface ModalContentProps extends ComponentProps<"div"> {}

function Content({ children, ...props }: ModalContentProps) {
  return (
    <div className={styles.modalContents} {...props}>
      {children}
    </div>
  );
}
export default Content;
