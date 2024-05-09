import { StoryFn, Meta } from "@storybook/react";
import CloseButton from "./CloseButton";

export default {
  title: "Components/Buttons/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<{
  onClick: () => void;
  guidanceSize?: "small" | "medium" | "large";
}> = (args) => <CloseButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  onClick: () => alert("Clicked"),
  guidanceSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick: () => alert("Clicked"),
  guidanceSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick: () => alert("Clicked"),
  guidanceSize: "large",
};
