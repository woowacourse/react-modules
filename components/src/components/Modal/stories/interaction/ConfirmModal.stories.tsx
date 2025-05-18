import { StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import ConfirmModal from "../../../ModalPreset/ConfirmModal";
import meta from "../Modal.meta";

export default {
  ...meta,
  title: "modal/Interaction/ConfirmModal",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ConfirmModal>;

const ConfirmModalWithInteractions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleConfirm = () => {
    setConfirmClicked(true);
    closeModal();
  };

  return (
    <div>
      <button type="button" onClick={openModal} data-testid="open-modal-btn">
        모달 열기
      </button>
      <div data-testid="confirm-status">
        {confirmClicked ? "확인 버튼이 클릭되었습니다" : ""}
      </div>
      <ConfirmModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        title={{ text: "확인 모달" }}
        data-testid="confirm-modal"
      >
        <p data-testid="modal-content">정말 이 작업을 수행하시겠습니까?</p>
      </ConfirmModal>
    </div>
  );
};

export const ConfirmModalInteractions: Story = {
  render: () => <ConfirmModalWithInteractions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("확인 모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("모달이 열리고 내용이 표시되는지 확인", async () => {
      const modalContent = within(document.body).getByTestId("modal-content");
      expect(modalContent).toBeInTheDocument();
      expect(modalContent).toHaveTextContent(
        "정말 이 작업을 수행하시겠습니까?"
      );
    });

    await step("확인 버튼 클릭", async () => {
      const confirmButton = within(document.body).getByText("확인");
      await userEvent.click(confirmButton);
    });

    await step("모달이 닫히고 확인 콜백이 실행되었는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByTestId(
          "modal-content"
        );
        expect(modalContent).not.toBeInTheDocument();

        const statusElement = canvas.getByTestId("confirm-status");
        expect(statusElement).toHaveTextContent("확인 버튼이 클릭되었습니다");
      });
    });
  },
};

export const CancelButtonInteractions: Story = {
  render: () => <ConfirmModalWithInteractions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("확인 모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("취소 버튼 클릭", async () => {
      const cancelButton = within(document.body).getByText("취소");
      await userEvent.click(cancelButton);
    });

    await step("모달이 닫히고 확인 콜백이 실행되지 않았는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByTestId(
          "modal-content"
        );
        expect(modalContent).not.toBeInTheDocument();

        const statusElement = canvas.getByTestId("confirm-status");
        expect(statusElement).toHaveTextContent("");
      });
    });
  },
};
