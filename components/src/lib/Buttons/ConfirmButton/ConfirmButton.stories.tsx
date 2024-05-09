import { StoryFn, Meta } from "@storybook/react";
import ConfirmButton from "./ConfirmButton";

export default {
  title: "Components/Buttons/ConfirmButton",
  component: ConfirmButton,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<{
  onClick: () => void;
  content: string;
  guidanceSize?: "small" | "medium" | "large";
}> = (args) => <ConfirmButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  guidanceSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  guidanceSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick: () => alert("Clicked"),
  content: "Confirm",
  guidanceSize: "large",
};
