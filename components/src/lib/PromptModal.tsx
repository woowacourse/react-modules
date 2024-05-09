import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface PromptModalProps extends CompoundModalProps {
  title?: string;
  children?: undefined;
}
export default function PromptModal({
  title,
  onCancel,
  onConfirm,
}: PromptModalProps) {
  return (
    <CompoundModal onCancel={onCancel} onConfirm={onConfirm}>
      {title && (
        <CompoundModal.title style={{ marginBottom: '10px' }}>
          {title}
        </CompoundModal.title>
      )}
      <CompoundModal.textInput />
      <CompoundModal.buttonContainer align='right'>
        <CompoundModal.button buttonTheme='secondary' cancelButton>
          취소
        </CompoundModal.button>
        <CompoundModal.button buttonTheme='primary' confirmButton>
          확인
        </CompoundModal.button>
      </CompoundModal.buttonContainer>
    </CompoundModal>
  );
}
