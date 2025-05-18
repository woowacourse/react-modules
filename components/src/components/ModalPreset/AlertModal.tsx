import Modal, { ModalProps } from "../Modal/Modal";

const defaultButtonWrapperStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
};

const defaultConfirmButtonStyle: React.CSSProperties = { width: "90px" };

interface AlertModalProps extends ModalProps {
  confirmButtonWrapperStyle?: React.CSSProperties;
  confirmButtonStyle?: React.CSSProperties;
  confirmButtonText?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AlertModal = ({
  /**
   * 확인 버튼 래퍼 및 버튼 자체 스타일
   */
  confirmButtonWrapperStyle = defaultButtonWrapperStyle,
  confirmButtonStyle = defaultConfirmButtonStyle,

  /**
   * 확인 버튼 텍스트
   */
  confirmButtonText = "확인",

  /**
   * 확인 버튼 클릭 시 실행될 핸들러 함수
   */
  onConfirm,

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
}: AlertModalProps) => {
  return (
    <Modal {...props} isOpen={isOpen} onClose={onClose}>
      {children}
      <div style={confirmButtonWrapperStyle}>
        <Modal.ActionButtons
          confirmText={confirmButtonText}
          onConfirm={onConfirm}
          confirmProps={{ style: confirmButtonStyle }}
          showCancel={false}
        />
      </div>
    </Modal>
  );
};

export default AlertModal;
