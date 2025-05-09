import Dialog from "./Dialog";

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
  return (
    <Dialog position={position} size={size} open={open} modalClose={modalClose}>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content
            style={{ padding: "26px 32px", borderRadius: "10px" }}
          >
            <Dialog.Header>
              <AlertHeader title={title} />
            </Dialog.Header>
            <AlertContent content={content} />
            <Dialog.CloseButton>
              <AlertCloseButton text={buttonText}></AlertCloseButton>
            </Dialog.CloseButton>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  );
}

function AlertHeader({ title }: { title: string }) {
  return <h1 style={{ fontSize: "18px", fontWeight: 700 }}>{title}</h1>;
}

function AlertContent({ content }: { content: string }) {
  return <p style={{ fontSize: "12px", fontWeight: 500 }}>{content}</p>;
}

function AlertCloseButton({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      <button
        style={{
          backgroundColor: "#333333",
          border: "none",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: 700,
          color: "white",
          padding: "6px 20px",
          borderRadius: "5px",
        }}
      >
        {text}
      </button>
    </div>
  );
}
