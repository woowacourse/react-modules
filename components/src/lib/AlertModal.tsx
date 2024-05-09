import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface AlertModalProps extends CompoundModalProps {
  title?: string;
}
export default function AlertModal({
  title,
  children,
  onCancel,
  onConfirm,
}: AlertModalProps) {
  return (
    <CompoundModal onCancel={onCancel} onConfirm={onConfirm}>
      {title && (
        <CompoundModal.title style={{ marginBottom: '10px' }}>
          {title}
        </CompoundModal.title>
      )}
      {children}
      <CompoundModal.buttonContainer align='right'>
        <CompoundModal.button buttonTheme='primary' confirmButton>
          확인
        </CompoundModal.button>
      </CompoundModal.buttonContainer>
    </CompoundModal>
  );
}
