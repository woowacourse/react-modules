import Dialog from "./Dialog";
import DialogButton from "./DialogButton";
import DialogHeader from "./DialogHeader";
import DialogContent from "./DialogContent";

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
  return (
    <Dialog position={position} size={size} open={open} modalClose={modalClose}>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content
            style={{ padding: "26px 32px", borderRadius: "10px" }}
          >
            <Dialog.Header>
              <DialogHeader title={title} />
            </Dialog.Header>
            <DialogContent content={content} />
            <Dialog.CloseButton>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
              >
                <DialogButton type="basic" text={closeButtonText} />
                <DialogButton
                  type="primary"
                  text={checkButtonText}
                  onClick={onCheckButtonClick}
                />
              </div>
            </Dialog.CloseButton>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}
