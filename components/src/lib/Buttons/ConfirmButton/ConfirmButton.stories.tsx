import { StoryFn, Meta } from "@storybook/react";
import ConfirmButton from "./ConfirmButton";

export default {
  title: "Components/Buttons/ConfirmButton",
  component: ConfirmButton,
} as Meta;

const Template: StoryFn<{
  onClick: () => void;
  content: string;
  size?: "small" | "medium" | "large";
}> = (args) => <ConfirmButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  size: "large",
};
