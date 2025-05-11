import { StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import Modal from "../Modal";
import meta from "./Modal.meta";
import CancelButton from "../../ModalActions/CancelButton";

export default {
  ...meta,
  title: "modal/Interaction",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Modal>;

const ModalForInteraction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal} data-testid="open-modal-btn">
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "모달 상호작용 테스트" }}
        data-testid="modal"
      >
        <div data-testid="modal-content">
          <p>모달 내용</p>
          <CancelButton data-testid="close-modal-btn">모달 닫기</CancelButton>
        </div>
      </Modal>
    </>
  );
};

export const ModalOpenAndClose: Story = {
  render: () => <ModalForInteraction />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("초기에 모달이 보이지 않는지 확인", async () => {
      const modalContent = canvas.queryByTestId("modal-content");
      expect(modalContent).not.toBeInTheDocument();
    });

    await step("모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("모달이 열렸는지 확인", async () => {
      const modalContent = within(document.body).getByTestId("modal-content");
      expect(modalContent).toBeInTheDocument();

      const modalTitle = within(document.body).getByText(
        "모달 상호작용 테스트"
      );
      expect(modalTitle).toBeInTheDocument();
    });

    await step("모달 내부의 닫기 버튼 클릭", async () => {
      const closeButton = within(document.body).getByTestId("close-modal-btn");
      await userEvent.click(closeButton);
    });

    await step("모달이 닫혔는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByTestId(
          "modal-content"
        );
        expect(modalContent).not.toBeInTheDocument();
      });
    });
  },
};

export const ModalCloseWithEscapeKey: Story = {
  render: () => <ModalForInteraction />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("ESC 키를 눌러 모달 닫기", async () => {
      await userEvent.keyboard("{Escape}");
    });

    await step("모달이 닫혔는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByTestId(
          "modal-content"
        );
        expect(modalContent).not.toBeInTheDocument();
      });
    });
  },
};
