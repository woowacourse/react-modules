import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import PromptDialog from '../components/PromptDialog/PromptDialog';
import { Dialog } from '../lib';
import {
  buttonContainer,
  cancelButton,
  confirmButton,
  dialogContainer,
  input,
  inputContainer,
  titleStyle,
} from '../components/PromptDialog/PromptDialog.css';

const meta = {
  title: 'Components/PromptDialog',
  component: PromptDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PromptDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 PromptDialog 예제입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * 모바일 환경에서의 PromptDialog 예제입니다.
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
 * 작은 사이즈의 PromptDialog 예제입니다.
 */
export const SmallSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Small Prompt Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="small">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>이름을 입력해 주세요</h2>
            <div css={inputContainer}>
              <input css={input} type="text" placeholder="홍길동" />
            </div>
            <div css={buttonContainer}>
              <Dialog.CloseButton>
                <button css={cancelButton}>취소</button>
              </Dialog.CloseButton>
              <Dialog.CloseButton>
                <button css={confirmButton}>확인</button>
              </Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 중간 사이즈의 PromptDialog 예제입니다.
 */
export const MediumSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Medium Prompt Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="medium">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>이메일 주소를 입력해 주세요</h2>
            <div css={inputContainer}>
              <input css={input} type="email" placeholder="example@email.com" />
            </div>
            <div css={buttonContainer}>
              <Dialog.CloseButton>
                <button css={cancelButton}>취소</button>
              </Dialog.CloseButton>
              <Dialog.CloseButton>
                <button css={confirmButton}>확인</button>
              </Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 큰 사이즈의 PromptDialog 예제입니다.
 */
export const LargeSize = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>Large Prompt Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content size="large">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>의견을 입력해 주세요</h2>
            <div css={inputContainer}>
              <textarea
                css={css`
                  ${input};
                  height: 120px;
                  resize: none;
                `}
                placeholder="여기에 의견을 작성해 주세요..."
              />
            </div>
            <div css={buttonContainer}>
              <Dialog.CloseButton>
                <button css={cancelButton}>취소</button>
              </Dialog.CloseButton>
              <Dialog.CloseButton>
                <button css={confirmButton}>제출</button>
              </Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};

/**
 * 하단에 위치한 PromptDialog 예제입니다.
 */
export const BottomPosition = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>하단 프롬프트 다이얼로그</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content position="bottom" size="medium">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>검색어를 입력하세요</h2>
            <div css={inputContainer}>
              <input css={input} type="text" placeholder="검색어 입력..." />
            </div>
            <div css={buttonContainer}>
              <Dialog.CloseButton>
                <button css={cancelButton}>취소</button>
              </Dialog.CloseButton>
              <Dialog.CloseButton>
                <button css={confirmButton}>검색</button>
              </Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  ),
};
