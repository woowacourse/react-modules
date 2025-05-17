import Dialog from "../Dialog/Dialog";
import DialogButton from "../Dialog/DialogButton";
import DialogHeader from "../Dialog/DialogHeader";
import DialogContent from "../Dialog/DialogContent";
import useFocus from "../hooks/useFocus";
import useFirstNodeFocus from "../hooks/useFirstNodeFocus";
import { StyledButtonWrapper, StyledContentWrapper } from "../styled.css";

type ConfirmProps = {
  open: boolean;
  modalClose: () => void;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  title: string;
  content: string;
  closeButtonText?: string;
  checkButtonText?: string;
  onCheckButtonClick?: () => void;
};

export default function Confirm({
  open,
  modalClose,
  size = "medium",
  position = "center",
  title,
  content,
  closeButtonText = "취소",
  checkButtonText = "확인",
  onCheckButtonClick,
}: ConfirmProps) {
  const { modalRef } = useFocus(open);
  useFirstNodeFocus({ isOpen: open, ref: modalRef });

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
              <DialogContent content={content} />
              <StyledButtonWrapper>
                <Dialog.CloseAction>
                  <DialogButton type="basic" text={closeButtonText} />
                </Dialog.CloseAction>
                <DialogButton
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
