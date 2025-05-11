export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
  buttonText: string;
  width?: string;
  type: 'confirm' | 'cancel';
}
