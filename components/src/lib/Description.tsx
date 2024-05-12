import { PropsWithChildren } from "react";

type DescriptionProps = {
  className?: string;
};

const Description = ({
  className = "",
  children,
}: PropsWithChildren<DescriptionProps>) => {
  return <p className={className}> {children}</p>;
};

export default Description;
