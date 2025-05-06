import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    type: "confirm",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Confirm: Story = {
  render: () => (
    <>
      <Button text="버튼" onclick={() => {}} />
      <Button type="confirm" onclick={() => {}} />
    </>
  ),
};
