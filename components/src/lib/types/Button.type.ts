export interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  width?: string;
  type: 'confirm' | 'cancel';
}
