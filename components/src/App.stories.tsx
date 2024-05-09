import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Modal } from "./lib/index";
import App from "./App";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<Record<string, never>> = () => (
  <Modal
    size="large"
    position="bottom"
    onBackdropClick={() => console.log("Backdrop clicked")}
  >
    <Modal.Title
      title="Modal Title"
      subtitle="Modal subtitle"
      position="left"
    />
    <div>Children</div>
    <Modal.InputForm
      title="Input Title"
      placeHolder="Input placeholder"
      size="small"
    />
    <Modal.CancelButton
      onClick={() => console.log("Close clicked")}
      content="Close"
      size="medium"
    />
    <Modal.ConfirmButton
      onClick={() => console.log("Confirm clicked")}
      content="Confirm"
      size="large"
    />
    <Modal.CloseButton
      onClick={() => console.log("Close clicked")}
      size="large"
    />
  </Modal>
);

export const Default = Template.bind({});

// App Component Story
export const AppExample = () => <App />;
