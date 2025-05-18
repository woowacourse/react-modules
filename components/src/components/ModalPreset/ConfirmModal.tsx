import { ButtonProps } from "../Common/Button/Button";
import Modal, { ModalProps } from "../Modal/Modal";

const defaultActionButtonsWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  gap: "10px",
};

const defaultButtonStyle: React.CSSProperties = { width: "90px" };

interface ConfirmModalProps extends ModalProps {
  actionButtonsWrapperStyle?: React.CSSProperties;
  confirmButtonStyle?: React.CSSProperties;
  cancelButtonStyle?: React.CSSProperties;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
}

const ConfirmModal = ({
  /**
   * 스타일 관련 속성
   */
  actionButtonsWrapperStyle = defaultActionButtonsWrapperStyle,
  confirmButtonStyle = defaultButtonStyle,
  cancelButtonStyle = defaultButtonStyle,

  /**
   * 확인 및 취소 버튼 텍스트
   */
  confirmButtonText = "확인",
  cancelButtonText = "취소",

  /**
   * 확인 버튼 클릭 시 실행될 핸들러 함수
   */
  onConfirm,

  /**
   * 확인 및 취소 버튼 추가 속성들
   */
  confirmProps,
  cancelProps,

  /**
   * 모달 컨텐츠
   */
  children,

  /**
   * Modal 컴포넌트의 필수 값
   */
  isOpen,
  onClose,

  /**
   * Modal 컴포넌트에 전달될 추가 속성들
   */
  ...props
}: ConfirmModalProps) => {
  const mergedConfirmProps = {
    ...confirmProps,
    style: { ...confirmProps?.style, ...confirmButtonStyle },
  };
  const mergedCancelProps = {
    ...cancelProps,
    style: { ...cancelProps?.style, ...cancelButtonStyle },
  };

  return (
    <Modal {...props} isOpen={isOpen} onClose={onClose}>
      {children}
      <div style={actionButtonsWrapperStyle}>
        <Modal.ActionButtons
          confirmText={confirmButtonText}
          cancelText={cancelButtonText}
          onConfirm={onConfirm}
          confirmProps={mergedConfirmProps}
          cancelProps={mergedCancelProps}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
