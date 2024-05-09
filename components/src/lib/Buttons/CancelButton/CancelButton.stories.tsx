import { StoryFn, Meta } from "@storybook/react";
import CancelButton from "./CancelButton";
import "../../../reset.css";

export default {
  title: "Components/Buttons/CancelButton",
  component: CancelButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta<typeof CancelButton>;

const Template: StoryFn<typeof CancelButton> = (args) => (
  <CancelButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick: () => alert("Clicked"),
  content: "Cancel",
  size: "large",
};
