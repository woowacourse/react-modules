interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <button {...restProps}>{children}</button>;
};

export default Button;
