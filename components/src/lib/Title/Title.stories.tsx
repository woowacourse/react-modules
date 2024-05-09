import { StoryFn, Meta } from "@storybook/react";
import Title from "./Title";

export default {
  title: "Components/Title",
  component: Title,
} as Meta;

const Template: StoryFn<{
  title: string;
  subtitle?: string;
  position?: "left" | "center";
}> = (args) => <Title {...args} />;

export const LeftPositionWithTitleAndSubtitle = Template.bind({});
LeftPositionWithTitleAndSubtitle.args = {
  title: "Main Title",
  subtitle: "Subtitle",
  position: "left",
};

export const CenterPositionWithTitle = Template.bind({});
CenterPositionWithTitle.args = {
  title: "Centered Title",
  position: "center",
};
