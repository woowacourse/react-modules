import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import App from '../App';

const meta = {
  title: 'App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OpenModal: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.queryByText('모달열림')).toBeNull();

    const openButton = canvas.getByRole('button', {
      name: '모달열기',
    });
    await userEvent.click(openButton);

    expect(canvas.getByText('모달열림')).toBeVisible();
  },
};

export const CloseByButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', {
      name: '모달열기',
    });
    await userEvent.click(openButton);

    const closeButton = canvas.getByTestId('modal-close');
    await userEvent.click(closeButton);

    expect(canvas.queryByText('모달열림')).toBeNull();
  },
};

export const CloseByOverlay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', {
      name: '모달열기',
    });
    await userEvent.click(openButton);

    const closeButton = canvas.getByTestId('modal-overlay');
    await userEvent.click(closeButton);

    expect(canvas.queryByText('모달열림')).toBeNull();
  },
};
