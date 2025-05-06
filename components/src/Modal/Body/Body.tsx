import { ModalBody } from "./Body.styled";

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
  styled?: React.CSSProperties;
};

export const Body = ({ children, className, styled }: ModalBodyProps) => {
  return (
    <ModalBody className={className} style={styled}>
      {children}
    </ModalBody>
  );
};
