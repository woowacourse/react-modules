import type { Meta, StoryObj } from '@storybook/react';
import AlertDialog from '../components/AlertDialog/AlertDialog';
import { Dialog } from '../lib';
import { AlertDialogLayout } from '../components/AlertDialog/AlertDialog.css';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 AlertDialog 예제입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * 모바일 환경에서의 AlertDialog 예제입니다.
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
 * 작은 사이즈의 AlertDialog 예제입니다.
 */
export const SmallSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Small Alert Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="small">
          <section css={AlertDialogLayout}>
            <Dialog.Header>
              <div>
                <p>Small Alert Dialog</p>
                <p>작은 크기의 알림 다이얼로그입니다.</p>
              </div>
            </Dialog.Header>
            <Dialog.CloseButton>확인</Dialog.CloseButton>
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 중간 사이즈의 AlertDialog 예제입니다.
 */
export const MediumSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Medium Alert Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="medium">
          <section css={AlertDialogLayout}>
            <Dialog.Header>
              <div>
                <p>Medium Alert Dialog</p>
                <p>중간 크기의 알림 다이얼로그입니다.</p>
                <p>기본 크기로 설정되어 있습니다.</p>
              </div>
            </Dialog.Header>
            <Dialog.CloseButton>확인</Dialog.CloseButton>
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 큰 사이즈의 AlertDialog 예제입니다.
 */
export const LargeSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Large Alert Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="large">
          <section css={AlertDialogLayout}>
            <Dialog.Header>
              <div>
                <p>Large Alert Dialog</p>
                <p>큰 크기의 알림 다이얼로그입니다.</p>
                <p>많은 내용을 표시할 때 유용합니다.</p>
                <p>더 넓은 화면 공간을 활용할 수 있습니다.</p>
              </div>
            </Dialog.Header>
            <Dialog.CloseButton>확인</Dialog.CloseButton>
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 하단에 위치한 AlertDialog 예제입니다.
 */
export const BottomPosition = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>하단 알림 다이얼로그</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content position="bottom" size="medium">
          <section css={AlertDialogLayout}>
            <Dialog.Header>
              <div>
                <p>알림 메시지</p>
                <p>하단에 표시되는 알림 다이얼로그입니다.</p>
                <p>모바일 환경에서 사용하기 적합합니다.</p>
              </div>
            </Dialog.Header>
            <Dialog.CloseButton>확인</Dialog.CloseButton>
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};
