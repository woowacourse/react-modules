import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => <Input height={"30px"} />,
};
