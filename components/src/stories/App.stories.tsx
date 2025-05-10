import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
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

export const CloseByEsc: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', {
      name: '모달열기',
    });
    await userEvent.click(openButton);

    await userEvent.keyboard('{Escape}');

    expect(canvas.queryByText('모달열림')).toBeNull();
  },
};

export const FocusWrap: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole('button', {
      name: '모달열기',
    });
    await userEvent.click(openButton);

    const firstInput = await canvas.findByTestId('first-input');
    const secondButton = await canvas.findByTestId('second-button');
    const thirdLink = await canvas.findByTestId('third-link');

    // 첫 번째 포커스 요소 확인
    await waitFor(() => {
      expect(document.activeElement).toBe(firstInput);
    });

    // TAB → 버튼2
    await userEvent.tab();
    expect(document.activeElement).toBe(secondButton);

    // TAB → 링크3
    await userEvent.tab();
    expect(document.activeElement).toBe(thirdLink);

    // TAB → 다시 input1 (순환)
    await userEvent.tab();
    expect(document.activeElement).toBe(firstInput);

    // Shift+TAB → 링크3 (역순환)
    await userEvent.tab({ shift: true });
    expect(document.activeElement).toBe(thirdLink);

    // Shift+TAB → 버튼2
    await userEvent.tab({ shift: true });
    expect(document.activeElement).toBe(secondButton);

    // Shift+TAB → input1
    await userEvent.tab({ shift: true });
    expect(document.activeElement).toBe(firstInput);
  },
};
