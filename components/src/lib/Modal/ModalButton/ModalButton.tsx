import { FooterButton } from './ModalButton.style';

export interface ModalButtonProps {
  text: string;
  style: 'primary' | 'secondary';
  onClick: () => void;
}

export default function ModalButton({ text, style, onClick }: ModalButtonProps) {
  return (
    <FooterButton
      $style={style}
      onClick={onClick}
    >
      {text}
    </FooterButton>
  );
}
