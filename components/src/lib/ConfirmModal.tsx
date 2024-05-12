import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface ConfirmModalProps extends CompoundModalProps {
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
}
export default function ConfirmModal({
  title,
  children,
  position = 'center',
  size = 'medium',
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <CompoundModal position={position} size={size}>
      {title && (
        <CompoundModal.title style={{ marginBottom: '10px' }}>
          {title}
        </CompoundModal.title>
      )}
      {children}
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
