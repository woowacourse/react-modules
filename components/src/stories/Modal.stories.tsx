import Modal from '@/lib/Modal/Modal';
import type { StoryObj } from '@storybook/react';
import {
  CardSelectModal,
  CloseIconModal,
  NoCloseIconModal,
  PromptInputModal,
} from './ModalExamples';

export default {
  title: 'Components/Modal',
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <CardSelectModal />,
};

export const CloseIconModalExample: Story = {
  render: () => <CloseIconModal />,
};

export const NoCloseIconModalExample: Story = {
  render: () => <NoCloseIconModal />,
};

export const PromptInputModalExample: Story = {
  render: () => <PromptInputModal />,
};
