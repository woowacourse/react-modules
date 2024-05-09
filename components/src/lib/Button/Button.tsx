import * as Styled from './Button.styled';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: ButtonSize;
  width?: ButtonWidth;
  buttonStyle?: ButtonStyle;
  primaryColor?: string;
  disabled?: boolean
}

const Button = ({
  text,
  onClick,
  size = 'medium',
  width = 'fixed',
  buttonStyle = 'primary',
  primaryColor = '#333333',
  disabled = false,
}: ButtonProps) => {

  return (
    <Styled.Button
      onClick={onClick}
      size={size}
      width={width}
      buttonStyle={buttonStyle}
      primaryColor={primaryColor}
      disabled={disabled}
    >
      <Styled.ButtonText
        size={size}
        buttonStyle={buttonStyle}
        primaryColor={primaryColor}
        disabled={disabled}
      >
        {text}
      </Styled.ButtonText>
    </Styled.Button>
  );
};

export default Button;
