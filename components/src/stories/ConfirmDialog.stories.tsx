import type { Meta, StoryObj } from '@storybook/react';
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog';
import { Dialog } from '../lib';
import {
  buttonContainer,
  descriptionStyle,
  dialogContainer,
  titleStyle,
} from '../components/ConfirmDialog/ConfirmDialog.css';

const meta = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 ConfirmDialog 예제입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * 모바일 환경에서의 ConfirmDialog 예제입니다.
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
 * 작은 사이즈의 ConfirmDialog 예제입니다.
 */
export const SmallSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Small Confirm Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="small">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>삭제하시겠습니까?</h2>
            <p css={descriptionStyle}>작은 사이즈의 확인 다이얼로그입니다.</p>
            <div css={buttonContainer}>
              <Dialog.CloseButton>취소</Dialog.CloseButton>
              <Dialog.CloseButton>확인</Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 중간 사이즈의 ConfirmDialog 예제입니다.
 */
export const MediumSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Medium Confirm Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="medium">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>저장하지 않은 내용이 있습니다</h2>
            <p css={descriptionStyle}>
              중간 사이즈의 확인 다이얼로그입니다. 기본 크기로 설정되어
              있습니다.
            </p>
            <div css={buttonContainer}>
              <Dialog.CloseButton>취소</Dialog.CloseButton>
              <Dialog.CloseButton>저장</Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 큰 사이즈의 ConfirmDialog 예제입니다.
 */
export const LargeSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Large Confirm Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="large">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>프로젝트를 삭제하시겠습니까?</h2>
            <p css={descriptionStyle}>
              큰 사이즈의 확인 다이얼로그입니다. 많은 내용을 표시할 때
              유용합니다.
            </p>
            <p css={descriptionStyle}>
              삭제된 프로젝트는 복구할 수 없으며, 모든 관련 데이터가 영구적으로
              삭제됩니다.
            </p>
            <p css={descriptionStyle}>정말로 삭제하시겠습니까?</p>
            <div css={buttonContainer}>
              <Dialog.CloseButton>취소</Dialog.CloseButton>
              <Dialog.CloseButton>삭제</Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 하단에 위치한 ConfirmDialog 예제입니다.
 */
export const BottomPosition = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>하단 확인 다이얼로그</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content position="bottom" size="medium">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>로그아웃 하시겠습니까?</h2>
            <p css={descriptionStyle}>
              하단에 표시되는 확인 다이얼로그입니다. 모바일 환경에서 사용하기
              적합합니다.
            </p>
            <div css={buttonContainer}>
              <Dialog.CloseButton>취소</Dialog.CloseButton>
              <Dialog.CloseButton>로그아웃</Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};
