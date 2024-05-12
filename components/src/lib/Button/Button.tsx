import * as Styled from './Button.styled';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonWidth = 'fixed' | 'fit' | 'full';
export type ButtonStyle = 'primary' | 'border' | 'text';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  /**
   * @defaultValue 'medium'
   * @remarks type ButtonSize = "small" | "medium" | "large"
   */
  size?: ButtonSize;

  /**
   * @defaultValue 'fixed'
   * @remarks type ButtonWidth = "fixed" | "fit" | "full"
   */
  width?: ButtonWidth;

  /**
   * @defaultValue 'primary'
   * @remarks type ButtonStyle = "primary" | "border" | "text"
   */
  buttonStyle?: ButtonStyle;

  /**
   * @defaultValue '#333333'
   */
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
  );
};

export default Button;
