import React from "react";
import { StoryObj } from "@storybook/react";
import { Modal } from "../lib/Modal";
import { useArgs } from "@storybook/client-api";
import {
  ModalButtonSize,
  ModalContentSize,
  ModalPosition,
  ModalButtonTheme,
} from "../lib/types/modalProps";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],

  argTypes: {
    isOpen: {
      description: "모달의 열림 여부를 설정하는 arg입니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    position: {
      description: "모달의 위치를 결정하는 arg입니다. (center/bottom)",
      options: ["center", "bottom"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "center" },
      },
    },
    contentSize: {
      description: "모달의 사이즈를 결정하는 arg입니다. (small/medium/large)",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    title: {
      description: "모달의 제목을 설정하는 arg입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "Modal Title" },
      },
    },
    contentText: {
      description: "모달의 내용을 설정하는 arg입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "This is the content of the modal." },
      },
    },
    confirmButtonText: {
      description: "모달 버튼의 텍스트를 설정하는 arg입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "OK" },
      },
    },
    confirmButtonTheme: {
      description: "버튼의 색상 테마를 결정하는 arg입니다. (dark/light)",
      options: ["dark", "light", "inactive"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "dark" },
      },
    },
  },
};

export default meta;

interface ModalStoryProps {
  isOpen: boolean;
  position: ModalPosition;
  contentSize: ModalContentSize;
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  contentText: string;
  confirmButtonTheme: ModalButtonTheme;
  cancelButtonTheme?: ModalButtonTheme;
  buttonSize: ModalButtonSize;
}
type Story = StoryObj<ModalStoryProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    position: "center",
    contentSize: "medium",
    title: "Modal Title",
    contentText: "This is the content of the modal.",
    confirmButtonText: "OK",
    confirmButtonTheme: "dark",
    buttonSize: "large",
  },

  render: ({
    position,
    contentSize,
    title,
    contentText,
    confirmButtonText,
    confirmButtonTheme,
  }: ModalStoryProps) => {
    const [args, updateArgs] = useArgs();

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <button onClick={onOpen}>Open Modal</button>
        <Modal isOpen={args.isOpen} onClose={onClose}>
          <Modal.Dimmer />
          <Modal.Content position={position} size={contentSize}>
            <header>
              <h2 style={{ margin: 0 }}>{title}</h2>
              <Modal.CloseButton />
            </header>
            <main style={{ margin: "10px 0" }}>{contentText}</main>
            <footer>
              <Modal.Button
                theme={confirmButtonTheme}
                onClick={() => {
                  alert("modal button clicked!");
                  onClose();
                }}
              >
                {confirmButtonText}
              </Modal.Button>
            </footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const AlertModal: Story = {
  args: {
    isOpen: false,
    position: "center",
    contentSize: "medium",
    title: "아이디를 입력해 주세요.",
    contentText: "아이디는 필수로 입력해야 합니다.",
    confirmButtonText: "확인",
    confirmButtonTheme: "dark",
    buttonSize: "small",
  },

  render: ({
    position,
    contentSize,
    title,
    contentText,
    confirmButtonText,
    confirmButtonTheme,
    buttonSize,
  }: ModalStoryProps) => {
    const [args, updateArgs] = useArgs();

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <button onClick={onOpen}>Open Modal</button>
        <Modal isOpen={args.isOpen} onClose={onClose}>
          <Modal.Dimmer />
          <Modal.Content position={position} size={contentSize}>
            <header>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>{title}</h2>
            </header>
            <main style={{ margin: "16px 0", fontSize: "12px", color: "#0A0D13" }}>
              {contentText}
            </main>
            <footer style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Modal.Button
                theme={confirmButtonTheme}
                size={buttonSize}
                onClick={() => {
                  alert("modal confirm button clicked!");
                  onClose();
                }}
              >
                {confirmButtonText}
              </Modal.Button>
            </footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const ConfirmModal: Story = {
  args: {
    isOpen: false,
    position: "center",
    contentSize: "medium",
    title: "카드를 삭제하시겠습니까?",
    contentText: "삭제하면 복구하실 수 없습니다.",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    confirmButtonTheme: "dark",
    cancelButtonTheme: "light",
    buttonSize: "small",
  },

  render: ({
    position,
    contentSize,
    title,
    contentText,
    cancelButtonText,
    confirmButtonText,
    confirmButtonTheme,
    cancelButtonTheme,
    buttonSize,
  }: ModalStoryProps) => {
    const [args, updateArgs] = useArgs();

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <button onClick={onOpen}>Open Modal</button>
        <Modal isOpen={args.isOpen} onClose={onClose}>
          <Modal.Dimmer />
          <Modal.Content position={position} size={contentSize}>
            <header>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>{title}</h2>
            </header>
            <main style={{ margin: "16px 0", fontSize: "12px", color: "#0A0D13" }}>
              {contentText}
            </main>
            <footer style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Modal.Button
                theme={confirmButtonTheme}
                size={buttonSize}
                onClick={() => {
                  alert("modal confirm button clicked!");
                  onClose();
                }}
              >
                {confirmButtonText}
              </Modal.Button>
              <Modal.Button
                style={{ marginRight: "12px" }}
                theme={cancelButtonTheme}
                size={buttonSize}
                onClick={() => {
                  alert("modal cancel button clicked!");
                  onClose();
                }}
              >
                {cancelButtonText}
              </Modal.Button>
            </footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const PromptModal: Story = {
  args: {
    isOpen: false,
    position: "center",
    contentSize: "medium",
    title: "쿠폰 번호를 입력해 주세요.",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    confirmButtonTheme: "dark",
    cancelButtonTheme: "light",
    buttonSize: "small",
  },

  render: ({
    position,
    contentSize,
    title,
    cancelButtonText,
    confirmButtonText,
    confirmButtonTheme,
    cancelButtonTheme,
    buttonSize,
  }: ModalStoryProps) => {
    const [args, updateArgs] = useArgs();
    const [inputValue, setInputValue] = React.useState("");

    const onOpen = () => {
      updateArgs({ isOpen: true });
    };
    const onClose = () => {
      updateArgs({ isOpen: false });
    };

    return (
      <>
        <button onClick={onOpen}>Open Modal</button>
        <Modal isOpen={args.isOpen} onClose={onClose}>
          <Modal.Dimmer />
          <Modal.Content position={position} size={contentSize}>
            <header>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>{title}</h2>
            </header>
            <Modal.Input
              placeholder="123412341234"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
              style={{ margin: "14px 0" }}
            />
            <footer style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Modal.Button
                theme={confirmButtonTheme}
                size={buttonSize}
                onClick={() => {
                  alert(`modal confirm button clicked with the value of ${inputValue}!`);
                  setInputValue("");
                  onClose();
                }}
              >
                {confirmButtonText}
              </Modal.Button>
              <Modal.Button
                style={{ marginRight: "12px" }}
                theme={cancelButtonTheme}
                size={buttonSize}
                onClick={() => {
                  alert("modal cancel button clicked!");
                  setInputValue("");
                  onClose();
                }}
              >
                {cancelButtonText}
              </Modal.Button>
            </footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
