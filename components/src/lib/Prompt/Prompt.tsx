import { useRef } from "react";
import Dialog from "../Dialog/Dialog";
import DialogButton from "../Dialog/DialogButton";
import DialogHeader from "../Dialog/DialogHeader";
import useFocus from "../hooks/useFocus";
import useFirstNodeFocus from "../hooks/useFirstNodeFocus";
import { StyledButtonWrapper, StyledContentWrapper } from "../styled.css";

type ConfirmProps = {
  open: boolean;
  modalClose: () => void;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeButtonText?: string;
  checkButtonText?: string;
  onCheckButtonClick?: () => void;
};

export default function Prompt({
  open,
  modalClose,
  size = "medium",
  position = "center",
  title,
  value,
  onChange,
  closeButtonText = "취소",
  checkButtonText = "확인",
  onCheckButtonClick,
}: ConfirmProps) {
  const { modalRef } = useFocus(open);
  useFirstNodeFocus({ isOpen: open, ref: modalRef });

  const checkButtonRef = useRef<HTMLButtonElement>(null);
  function handleEnterKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkButtonRef.current?.click();
    }
  }

  return (
    <Dialog
      ref={modalRef}
      position={position}
      size={size}
      open={open}
      modalClose={modalClose}
    >
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content>
            <StyledContentWrapper>
              <Dialog.Header>
                <DialogHeader title={title} />
              </Dialog.Header>
              <Input
                value={value}
                onChange={onChange}
                handleEnterKeyDown={handleEnterKeyDown}
              />
              <StyledButtonWrapper>
                <Dialog.CloseAction>
                  <DialogButton type="basic" text={closeButtonText} />
                </Dialog.CloseAction>
                <DialogButton
                  ref={checkButtonRef}
                  type="primary"
                  text={checkButtonText}
                  onClick={onCheckButtonClick}
                />
              </StyledButtonWrapper>
            </StyledContentWrapper>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}

function Input({
  value,
  onChange,
  handleEnterKeyDown,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnterKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "2px",
          border: "1px solid black",
          boxSizing: "border-box",
          marginBottom: "16px",
        }}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleEnterKeyDown}
      />
    </div>
  );
}
