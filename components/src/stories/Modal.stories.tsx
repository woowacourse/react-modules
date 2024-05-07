import React from "react";
import { StoryObj } from "@storybook/react";
import { Modal } from "../lib/Modal";
import { useArgs } from "@storybook/client-api";
import { ModalPosition, ModalSize, ModalTheme } from "../lib/types/modalProps";

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
    size: {
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
    buttonText: {
      description: "모달 버튼의 텍스트를 설정하는 arg입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: { summary: "OK" },
      },
    },
    buttonTheme: {
      description: "버튼의 색상 테마를 결정하는 arg입니다. (dark/light)",
      options: ["dark", "light"],
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
  size: ModalSize;
  title: string;
  buttonText: string;
  contentText: string;
  buttonTheme: ModalTheme;
}
type Story = StoryObj<ModalStoryProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    position: "center",
    size: "medium",
    title: "Modal Title",
    contentText: "This is the content of the modal.",
    buttonText: "OK",
    buttonTheme: "dark",
  },

  render: ({ position, size, title, contentText, buttonText, buttonTheme }: ModalStoryProps) => {
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
          <Modal.Content position={position} size={size}>
            <header>
              <h2 style={{ margin: 0 }}>{title}</h2>
              <Modal.CloseButton />
            </header>
            <main style={{ margin: "10px 0" }}>{contentText}</main>
            <footer>
              <Modal.Button theme={buttonTheme} onClick={() => alert("modal button clicked!")}>
                {buttonText}
              </Modal.Button>
            </footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
