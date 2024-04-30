interface ButtonProps {
  text: string;
  onClick: () => void;
  size: 'small' | 'medium' | 'large';
  width: 'fit' | 'full';
  color?: 'primary' | 'secondary' | 'destructive';
  customStyle?: {
    primaryColor?: 'string';
    secondaryColor?: 'string';
    destructiveColor?: 'string';
  };
}
