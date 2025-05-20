import type { Meta, StoryObj } from '@storybook/react';
import CardTypeDialog from '../components/CardTypeDialog/CardTypeDialog';
import { Dialog } from '../lib';
import { cardGroup } from '../assets';
import {
  CardTypeDialogHeaderContainer,
  CardTypeDialogLayout,
} from '../components/CardTypeDialog/CardTypeDialog.css';

const meta = {
  title: 'Components/CardTypeDialog',
  component: CardTypeDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardTypeDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 CardTypeDialog 예제입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * 모바일 환경에서의 CardTypeDialog 예제입니다.
 */
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * 하단에 위치한 CardTypeDialog 예제입니다.
 */
export const BottomPosition = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>하단 다이얼로그 열기</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content position="bottom">
          <section css={CardTypeDialogLayout}>
            <div css={CardTypeDialogHeaderContainer}>
              <Dialog.Header>카드사 선택</Dialog.Header>
              <Dialog.CloseButton>X</Dialog.CloseButton>
            </div>
            <img src={cardGroup} alt="카드사 선택" />
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};
