import { css } from "@emotion/react";
import CancelButton from "../../buttons/CancelButton";
import ConfirmButton from "../../buttons/ConfirmButton";
import Modal from "../../Modal";
import { ModalProps } from "../../types/Modal.types";

interface PromptModalProps extends Omit<ModalProps, "children"> {
  /** 제목 (선택) */
  title?: React.ReactNode;

  /** 확인 버튼 클릭 시 호출되는 함수 (선택) */
  onConfirm?: () => void;

  /** 본문 콘텐츠 (선택) */
  content?: React.ReactNode;

  /** 입력값 (필수) */
  value: string;

  /** 입력값 변경 핸들러 (필수) */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** 확인 버튼 텍스트 (기본값: "확인") */
  label?: string;
}

const PromptModal = ({
  show,
  onHide,
  onConfirm,
  position = "center",
  size,
  title,
  content,
  showBackdrop = true,
  value,
  onChange,
  label = "확인",
}: PromptModalProps) => {
  return (
    <Modal show={show} onHide={onHide} size={size} position={position} showBackdrop={showBackdrop}>
      {title != null && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        {content}
        <input css={ModalInputStyle} type="text" value={value} onChange={onChange} />
      </Modal.Body>
      <Modal.Footer buttonAlign="right">
        <CancelButton onClick={onHide} />
        <ConfirmButton onHide={onHide} onConfirm={onConfirm} disabled={!value.trim()}>
          {label}
        </ConfirmButton>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;

const ModalInputStyle = css`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border-width: 1.01px;
  box-sizing: border-box;
`;
