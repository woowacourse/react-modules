import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';
import { css } from '@emotion/react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <button>기본 다이얼로그 열기</button>
      </Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content
            css={css`
              padding: 20px;
              min-width: 300px;
            `}
          >
            <Dialog.Header>
              <h2>기본 다이얼로그</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>

            <p>이것은 기본 다이얼로그입니다.</p>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  ),
};

export const PositionBottom: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <button>하단 다이얼로그 열기</button>
      </Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content position="bottom">
            <Dialog.Header>
              <h2>하단 다이얼로그</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>

            <p>이 다이얼로그는 화면 하단에 표시됩니다.</p>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  ),
};

export const CustomTrigger: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <span>커스텀 트리거로 열기</span>
      </Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content
            css={css`
              padding: 20px;
              min-width: 300px;
            `}
          >
            <Dialog.Header>
              <h2>커스텀 트리거 다이얼로그</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>

            <p>이 다이얼로그는 커스텀 트리거를 통해 열립니다.</p>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  ),
};

export const NestedDialogs: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <button>첫 번째 다이얼로그 열기</button>
      </Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Header>
              <h2>첫 번째 다이얼로그</h2>
              <Dialog.CloseButton>✕</Dialog.CloseButton>
            </Dialog.Header>

            <p>이것은 첫 번째 다이얼로그입니다.</p>

            <Dialog>
              <Dialog.Trigger>두 번째 다이얼로그 열기</Dialog.Trigger>
              <Dialog.Root>
                <Dialog.Overlay>
                  <Dialog.Content
                    css={css`
                      padding: 20px;
                      min-width: 300px;
                    `}
                  >
                    <Dialog.Header>
                      <h2>두 번째 다이얼로그</h2>
                      <Dialog.CloseButton>✕</Dialog.CloseButton>
                    </Dialog.Header>

                    <p>이것은 중첩된 두 번째 다이얼로그입니다.</p>
                  </Dialog.Content>
                </Dialog.Overlay>
              </Dialog.Root>
            </Dialog>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </Dialog>
  ),
};
