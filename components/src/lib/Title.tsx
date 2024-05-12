import { PropsWithChildren } from "react";

type TitleProps = {
  className?: string;
};

const Title = ({ className = "", children }: PropsWithChildren<TitleProps>) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;
