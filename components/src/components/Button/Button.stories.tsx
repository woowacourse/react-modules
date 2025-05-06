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
      <Button size="medium" text="버튼" onclick={() => {}} />
      <Button size="medium" type="confirm" onclick={() => {}} />
      <Button size="medium" type="cancel" onclick={() => {}} />
    </>
  ),
};
