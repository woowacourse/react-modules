import * as Styled from './Button.styled';

interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: ButtonSize;
  width?: ButtonWidth;
  buttonStyle?: ButtonStyle;
  primaryColor?: string;
}

const Button = ({
  text,
  onClick,
  size = 'medium',
  width = 'fixed',
  buttonStyle = 'primary',
  primaryColor = '#333333',
}: ButtonProps) => {

  return (
    <>
      <Styled.Button
        onClick={onClick}
        size={size}
        width={width}
        buttonStyle={buttonStyle}
        primaryColor={primaryColor}
      >
        <Styled.ButtonText
          size={size}
          buttonStyle={buttonStyle}
          primaryColor={primaryColor}
        >
          {text}
        </Styled.ButtonText>
      </Styled.Button>
    </>
  );
};

export default Button;
