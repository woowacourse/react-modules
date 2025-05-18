import { ChangeEvent } from "react";
import { Input } from "../../lib";
import { ButtonProps } from "../Common/Button/Button";
import Modal, { ModalProps } from "../Modal/Modal";

const defaultWrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
  paddingTop: "20px",
};

const defaultActionButtonsWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  gap: "10px",
};

const defaultButtonStyle: React.CSSProperties = { width: "90px" };

interface PromptModalProps extends ModalProps {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  wrapperStyle?: React.CSSProperties;
  actionButtonsWrapperStyle?: React.CSSProperties;
  confirmButtonStyle?: React.CSSProperties;
  cancelButtonStyle?: React.CSSProperties;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  confirmProps?: ButtonProps;
  cancelProps?: ButtonProps;
}

const PromptModal = ({
  /**
   * 입력 필드 속성
   */
  inputValue,
  onChange,
  placeholder,

  /**
   * 스타일 관련 속성
   */
  wrapperStyle = defaultWrapperStyle,
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
   * Modal 컴포넌트의 필수 값
   */
  isOpen,
  onClose,

  /**
   * Modal 컴포넌트에 전달될 추가 속성들
   */
  ...props
}: PromptModalProps) => {
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
      <div style={wrapperStyle}>
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={onChange}
        />
        <div style={actionButtonsWrapperStyle}>
          <Modal.ActionButtons
            confirmText={confirmButtonText}
            cancelText={cancelButtonText}
            onConfirm={onConfirm}
            confirmProps={mergedConfirmProps}
            cancelProps={mergedCancelProps}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PromptModal;
