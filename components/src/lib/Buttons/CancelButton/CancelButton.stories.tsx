import { StoryFn, Meta } from "@storybook/react";
import CancelButton from "./CancelButton";
import "../../../reset.css";

export default {
  title: "Components/Buttons/CancelButton",
  component: CancelButton,
  argTypes: { onClick: { action: "clicked" } },
  tags: ["autodocs"],
} as Meta<typeof CancelButton>;

const Template: StoryFn<typeof CancelButton> = (args) => (
  <CancelButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  guidanceSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  guidanceSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  guidanceSize: "large",
};
