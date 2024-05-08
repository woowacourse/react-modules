interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Button({
  className,
  type = 'submit',
  onButtonClick,
  children,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onButtonClick}>
      {children}
    </button>
  );
}

export default Button;
