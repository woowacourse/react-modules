import { CSSProperties, ElementType } from 'react';

interface ModalMessageProps {
  fontSize?: CSSProperties['fontSize'];
  fontColor?: CSSProperties['color'];
  content: string;
  position: 'left' | 'center';
  as?: ElementType;
}

const ModalMessage = ({ fontSize, fontColor, content, position, as }: ModalMessageProps) => {
  const MessageElement = as || 'p';

  return (
    <MessageElement
      style={{
        fontSize: fontSize || '12px',
        fontColor: fontColor || 'black',
        textAlign: position || 'left',
      }}
    >
      {content}
    </MessageElement>
  );
};

export default ModalMessage;
