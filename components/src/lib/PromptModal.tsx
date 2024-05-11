import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface PromptModalProps extends CompoundModalProps {
  title?: string;
  children?: undefined;
  onCancel: () => void;
  onConfirm: () => void;
}
export default function PromptModal({
  title,
  onCancel,
  onConfirm,
  position = 'center',
  size = 'medium',
}: PromptModalProps) {
  return (
    <CompoundModal
      onCancel={onCancel}
      onConfirm={onConfirm}
      position={position}
      size={size}
    >
      {title && (
        <CompoundModal.title style={{ marginBottom: '10px' }}>
          {title}
        </CompoundModal.title>
      )}
      <CompoundModal.textInput />
      <CompoundModal.buttonContainer align='right'>
        <CompoundModal.button buttonTheme='secondary' onClick={onCancel}>
          취소
        </CompoundModal.button>
        <CompoundModal.button buttonTheme='primary' onClick={onConfirm}>
          확인
        </CompoundModal.button>
      </CompoundModal.buttonContainer>
    </CompoundModal>
  );
}
