import Modal from '@/lib/Modal/Modal';
import type { StoryObj } from '@storybook/react';
import { LargeModal, MediumModal, SmallModal } from './ModalExamples';

export default {
  title: 'Components/Modal/Size',
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  render: () => <SmallModal />,
};

export const Medium: Story = {
  render: () => <MediumModal />,
};

export const Large: Story = {
  render: () => <LargeModal />,
};
