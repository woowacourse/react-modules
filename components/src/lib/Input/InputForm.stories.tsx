import { StoryFn, Meta } from "@storybook/react";
import InputForm from "./InputForm";

export default {
  title: "Components/InputForm",
  component: InputForm,
} as Meta;

const Template: StoryFn<{
  onChange: () => void;
  title?: string;
  placeHolder?: string;
  size?: "small" | "medium" | "large";
}> = (args) => <InputForm {...args} />;

export const LargeWithTitle = Template.bind({});
LargeWithTitle.args = {
  title: "Title",
  placeHolder: "Enter your text",
  size: "large",
};

export const MediumWithPlaceholder = Template.bind({});
MediumWithPlaceholder.args = {
  placeHolder: "Enter your text",
  size: "medium",
};

export const SmallWithoutTitle = Template.bind({});
SmallWithoutTitle.args = {
  placeHolder: "Enter your text",
  size: "small",
};
