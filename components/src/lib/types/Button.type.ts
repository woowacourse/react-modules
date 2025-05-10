export interface ButtonProps {
  onConfirm: () => void;
  buttonText: string;
  width?: string;
  type: 'confirm' | 'cancel';
}
