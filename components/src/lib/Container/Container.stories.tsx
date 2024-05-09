import { StoryFn, Meta } from "@storybook/react";
import Container from "./Container";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

const Template: StoryFn<{
  onBackdropClick?: () => void;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
}> = (args) => (
  <Container {...args}>
    <div style={{ padding: "20px" }}>This is the content of the container</div>
  </Container>
);

export const CenterSmall = Template.bind({});
CenterSmall.args = {
  size: "small",
  position: "center",
};

export const CenterMedium = Template.bind({});
CenterMedium.args = {
  size: "medium",
  position: "center",
};

export const CenterLarge = Template.bind({});
CenterLarge.args = {
  size: "large",
  position: "center",
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
};
