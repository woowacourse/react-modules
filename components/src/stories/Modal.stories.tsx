import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal, ModalContent } from "../lib/Modal/Modal";

const meta: Meta<typeof ModalContent> = {
  title: "Components/Modal",
  component: ModalContent,
  tags: ["autodocs"],
  argTypes: {
    modalPosition: {
      description: "모달의 위치",
      control: {
        type: "radio",
        options: ["center", "bottom"],
      },
    },
    closeButtonPosition: {
      description: "닫기 버튼의 위치",
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
    },
    size: {
      description: "모달 가로 길이",
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalContent>;

export const CenterSmall: Story = {
  args: {
    modalPosition: "center",
    closeButtonPosition: "top",
    size: "small",
    title: "Center Small Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a center small modal.</div>,
  },
  render: ({
    title,
    footerAlign,
    children,
    containClose,
    modalPosition,
    closeButtonPosition,
    size,
  }) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent
        modalPosition={modalPosition}
        closeButtonPosition={closeButtonPosition}
        size={size}
        containClose={containClose}
        footerAlign={footerAlign}
        title={title}
      >
        <Modal.Header title={title} containClose={containClose} />
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer align={footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};

export const CenterMedium: Story = {
  args: {
    modalPosition: "center",
    closeButtonPosition: "top",
    size: "medium",
    title: "Center Medium Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a center medium modal.</div>,
  },
  render: (args) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent {...args}>
        <Modal.Header title={args.title} containClose={args.containClose} />
        <Modal.Body>{args.children}</Modal.Body>
        <Modal.Footer align={args.footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};

export const CenterLarge: Story = {
  args: {
    modalPosition: "center",
    closeButtonPosition: "top",
    size: "large",
    title: "Center Large Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a center large modal.</div>,
  },
  render: (args) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent {...args}>
        <Modal.Header title={args.title} containClose={args.containClose} />
        <Modal.Body>{args.children}</Modal.Body>
        <Modal.Footer align={args.footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};

export const BottomSmall: Story = {
  args: {
    modalPosition: "bottom",
    closeButtonPosition: "bottom",
    size: "small",
    title: "Bottom Small Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a bottom small modal.</div>,
  },
  render: (args) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent {...args}>
        <Modal.Header title={args.title} containClose={args.containClose} />
        <Modal.Body>{args.children}</Modal.Body>
        <Modal.Footer align={args.footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};

export const BottomMedium: Story = {
  args: {
    modalPosition: "bottom",
    closeButtonPosition: "bottom",
    size: "medium",
    title: "Bottom Medium Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a bottom medium modal.</div>,
  },
  render: (args) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent {...args}>
        <Modal.Header title={args.title} containClose={args.containClose} />
        <Modal.Body>{args.children}</Modal.Body>
        <Modal.Footer align={args.footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};

export const BottomLarge: Story = {
  args: {
    modalPosition: "bottom",
    closeButtonPosition: "bottom",
    size: "large",
    title: "Bottom Large Modal",
    containClose: true,
    footerAlign: "end",
    children: <div>This is a bottom large modal.</div>,
  },
  render: (args) => (
    <Modal.Provider>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <ModalContent {...args}>
        <Modal.Header title={args.title} containClose={args.containClose} />
        <Modal.Body>{args.children}</Modal.Body>
        <Modal.Footer align={args.footerAlign}>
          <Modal.Close>
            <button>Cancel</button>
          </Modal.Close>
          <Modal.Close>
            <button>Confirm</button>
          </Modal.Close>
        </Modal.Footer>
      </ModalContent>
    </Modal.Provider>
  ),
};
