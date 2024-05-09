import { StoryFn, Meta } from "@storybook/react";
import Container from "./Container";
import "../../reset.css";
import "./Container.module.css";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

const Template: StoryFn<{
  onBackdropClick?: () => void;
  guidanceSize?: "small" | "medium" | "large";
  position?: "center" | "bottom";
}> = (args) => (
  <Container {...args}>
    <div style={{ padding: "20px" }}>This is the content of the container</div>
  </Container>
);

export const CenterSmall = Template.bind({});
CenterSmall.args = {
  guidanceSize: "small",
  position: "center",
};

export const CenterMedium = Template.bind({});
CenterMedium.args = {
  guidanceSize: "medium",
  position: "center",
};

export const CenterLarge = Template.bind({});
CenterLarge.args = {
  guidanceSize: "large",
  position: "center",
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
};
