import React from "react";
import { Meta } from "@storybook/react";
import { Modal } from "./lib/index";
import App from "./App";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

export const AppExample = () => <App />;
