import { StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import AlertModal from "../../../ModalPreset/AlertModal";
import meta from "../Modal.meta";

export default {
  ...meta,
  title: "modal/Interaction/AlertModal",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AlertModal>;

const AlertModalWithInteractions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertAcknowledged, setAlertAcknowledged] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    setIsOpen(true);
    setAlertAcknowledged(false);
  };

  const handleConfirm = () => {
    setAlertAcknowledged(true);
    closeModal();
  };

  return (
    <div>
      <button type="button" onClick={openModal} data-testid="open-modal-btn">
        모달 열기
      </button>
      <div data-testid="alert-status">
        {alertAcknowledged ? "알림이 확인되었습니다" : ""}
      </div>
      <AlertModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        title={{ text: "알림" }}
        data-testid="alert-modal"
      >
        <p data-testid="alert-content">이 작업이 성공적으로 완료되었습니다.</p>
      </AlertModal>
    </div>
  );
};

export const AlertModalInteractions: Story = {
  render: () => <AlertModalWithInteractions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("알림 모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("모달이 열리고 알림 내용이 표시되는지 확인", async () => {
      const alertContent = within(document.body).getByTestId("alert-content");
      expect(alertContent).toBeInTheDocument();
      expect(alertContent).toHaveTextContent(
        "이 작업이 성공적으로 완료되었습니다."
      );

      // 취소 버튼이 없는지 확인 (AlertModal은 확인 버튼만 있음)
      const cancelButton = within(document.body).queryByText("취소");
      expect(cancelButton).not.toBeInTheDocument();
    });

    await step("확인 버튼 클릭", async () => {
      const confirmButton = within(document.body).getByText("확인");
      await userEvent.click(confirmButton);
    });

    await step("모달이 닫히고 알림이 확인되었는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByTestId(
          "alert-content"
        );
        expect(modalContent).not.toBeInTheDocument();

        const statusElement = canvas.getByTestId("alert-status");
        expect(statusElement).toHaveTextContent("알림이 확인되었습니다");
      });
    });
  },
};
