import { ModalTitle } from "./Title.styled";

type ModalTitleProps = {
  className?: string;
  title: string;
  styled?: React.CSSProperties;
};

export const Title = ({ title, className, styled }: ModalTitleProps) => {
  return (
    <ModalTitle className={className} style={styled}>
      {title}
    </ModalTitle>
  );
};
