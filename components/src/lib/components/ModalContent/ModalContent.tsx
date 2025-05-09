import { ReactNode } from "react";

interface ModalContentProps {
  contentId: string;
  children: ReactNode;
}

const ModalContent = ({ contentId, children }: ModalContentProps) => {
  return <div id={contentId}>{children}</div>;
};

export default ModalContent;
