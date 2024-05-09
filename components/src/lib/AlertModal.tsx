import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface AlertModalProps extends CompoundModalProps {
  title?: string;
  onConfirm: () => void;
}
export default function AlertModal({
  title,
  children,
  position = 'center',
  size = 'medium',
  onConfirm,
}: AlertModalProps) {
  return (
    <CompoundModal onConfirm={onConfirm} position={position} size={size}>
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
