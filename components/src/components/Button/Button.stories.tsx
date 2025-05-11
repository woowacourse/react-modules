import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    variant: "confirm",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Confirm: Story = {
  render: () => (
    <>
      <Button size="medium" text="버튼" onClick={() => {}} />
      <Button size="medium" variant="confirm" onClick={() => {}} />
      <Button size="medium" variant="cancel" onClick={() => {}} />
    </>
  ),
};
