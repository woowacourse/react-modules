import React from "react";
import { StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";
import { useArgs } from "@storybook/client-api";
import { ModalPosition, ModalTheme } from "../lib/types/modalProps";

const meta = {
  title: "Modal",
  component: Modal,

  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    position: {
      options: ["center", "bottom"],
      control: {
        type: "radio",
      },
    },
    buttonTheme: {
      options: ["dark", "light"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

interface ModalStoryProps {
  isOpen: boolean;
  position: ModalPosition;
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
    title: "Modal Title",
    contentText: "This is the content of the modal.",
    buttonText: "OK",
    buttonTheme: "dark",
  },

  render: ({ position, title, contentText, buttonText, buttonTheme }: ModalStoryProps) => {
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
          <Modal.Content position={position}>
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
