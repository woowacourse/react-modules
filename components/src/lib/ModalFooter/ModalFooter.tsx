import styles from "./ModalFooter.module.css";

interface ModalFooterProps {
  children: React.ReactNode;
}

export default function ModalFooter({ children }: ModalFooterProps) {
  return <footer className={styles.modalFooter}>{children}</footer>;
}
