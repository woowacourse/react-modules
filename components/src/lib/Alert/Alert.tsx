import Dialog from "../Dialog/Dialog";
import DialogContent from "../Dialog/DialogContent";
import DialogHeader from "../Dialog/DialogHeader";
import DialogButton from "../Dialog/DialogButton";
import useFocus from "../hooks/useFocus";
import useFirstNodeFocus from "../hooks/useFirstNodeFocus";

type AlertProps = {
  open: boolean;
  modalClose: () => void;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  title: string;
  content: string;
  buttonText: string;
};

export default function Alert({
  open,
  modalClose,
  size = "medium",
  position = "center",
  title,
  content,
  buttonText,
}: AlertProps) {
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
          <Dialog.Content
            style={{ padding: "26px 32px", borderRadius: "10px" }}
          >
            <Dialog.Header>
              <DialogHeader title={title} />
            </Dialog.Header>
            <DialogContent content={content} />
            <Dialog.CloseAction>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <DialogButton
                  type="basic"
                  text={buttonText}
                  onClick={modalClose}
                />
              </div>
            </Dialog.CloseAction>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}
