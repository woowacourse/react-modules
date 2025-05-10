import style from "./ModalContent.module.css";
interface ModalContentProps {
  children: React.ReactNode;
}

export default function ModalContent({ children }: ModalContentProps) {
  return <div className={style.modalContent}>{children}</div>;
}
