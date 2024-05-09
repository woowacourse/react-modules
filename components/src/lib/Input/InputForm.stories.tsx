import { StoryFn, Meta } from "@storybook/react";
import InputForm from "./InputForm";

export default {
  title: "Components/InputForm",
  component: InputForm,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<{
  onChange: () => void;
  title?: string;
  placeHolder?: string;
  guidanceSize?: "small" | "medium" | "large";
}> = (args) => <InputForm {...args} />;

export const LargeWithTitle = Template.bind({});
LargeWithTitle.args = {
  title: "Title",
  guidanceSize: "large",
};

export const MediumWithPlaceholder = Template.bind({});
MediumWithPlaceholder.args = {
  placeHolder: "Enter your text",
  guidanceSize: "medium",
};

export const SmallWithTitleAndPlaceholder = Template.bind({});
SmallWithTitleAndPlaceholder.args = {
  title: "Title",
  placeHolder: "Enter your text",
  guidanceSize: "small",
};
