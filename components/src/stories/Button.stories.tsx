import type { StoryObj } from '@storybook/react';
import Button from '@/lib/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const DefaultButton = () => {
  return <Button label="버튼" size="medium" onClick={() => {}} />;
};

const DarkButton = () => {
  return (
    <Button label="버튼" size="medium" colorType="dark" onClick={() => {}} />
  );
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <DefaultButton />,
};

export const Dark: Story = {
  render: () => <DarkButton />,
};
