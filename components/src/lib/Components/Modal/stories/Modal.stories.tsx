import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor } from "@storybook/test";
import { useState } from "react";
import Modal from "..";

const meta: Meta<typeof Modal> = {
  title: "Modal/Position",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const CenterDisplay: Story = {
  args: { position: "center" },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <button id="trigger-button" onClick={() => setIsOpen((p) => !p)}>
          모달창 trigger
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Background id="modal-background">
            <Modal.Container id="modal-container">
              <Modal.Header>중앙 모달 제목입니다</Modal.Header>
              <Modal.Content>
                <p>중앙 모달 내용 입니다.</p>
              </Modal.Content>
            </Modal.Container>
          </Modal.Background>
        </Modal>
      </>
    );
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const CenterWithTests: Story = {
  ...CenterDisplay,
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector(
      "#trigger-button"
    ) as HTMLButtonElement;

    const container = document.body.querySelector("#modal-container")!;
    await waitFor(() =>
      expect(container).toHaveTextContent("중앙 모달 제목입니다")
    );

    // 닫기버튼으로 닫기
    const closeBtn = document.body.querySelector(
      "#modal-close-button"
    ) as HTMLElement;
    await userEvent.click(closeBtn);
    await waitFor(() => expect(container).not.toBeInTheDocument());

    // esc 키로 닫기
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(container).not.toBeInTheDocument());

    // 배경 클릭으로 닫기
    await userEvent.click(trigger);
    const background = document.body.querySelector("#modal-background")!;
    await userEvent.click(background);
    await waitFor(() => expect(container).not.toBeInTheDocument());
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const BottomDisplay: Story = {
  args: { position: "bottom" },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <button id="trigger-button-bottom" onClick={() => setIsOpen((p) => !p)}>
          모달창 trigger
        </button>
        <Modal
          {...args}
          dialogType="default"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Modal.Background id="modal-background">
            <Modal.Container id="modal-container">
              <Modal.Header>하단 모달 제목입니다</Modal.Header>
              <Modal.Content>
                <p>하단 모달 내용 입니다.</p>
              </Modal.Content>
            </Modal.Container>
          </Modal.Background>
        </Modal>
      </>
    );
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
