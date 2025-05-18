import { StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useState } from "react";
import PromptModal from "../../../ModalPreset/PromptModal";
import meta from "../Modal.meta";

export default {
  ...meta,
  title: "modal/Interaction/PromptModal",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof PromptModal>;

const PromptModalWithInteractions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    setInputValue("");
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setSubmittedValue(inputValue);
    closeModal();
  };

  return (
    <div>
      <button type="button" onClick={openModal} data-testid="open-modal-btn">
        모달 열기
      </button>
      <div data-testid="submitted-value">
        {submittedValue ? `제출된 값: ${submittedValue}` : ""}
      </div>
      <PromptModal
        isOpen={isOpen}
        onClose={closeModal}
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="값을 입력하세요"
        onConfirm={handleConfirm}
        title={{ text: "프롬프트 모달" }}
        data-testid="prompt-modal"
      />
    </div>
  );
};

export const PromptModalInteractions: Story = {
  render: () => <PromptModalWithInteractions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("모달이 열리고 입력 필드가 표시되는지 확인", async () => {
      const inputField = within(document.body).getByPlaceholderText(
        "값을 입력하세요"
      );
      expect(inputField).toBeInTheDocument();
      expect(inputField).toHaveValue("");
    });

    await step("값 입력하기", async () => {
      const inputField = within(document.body).getByPlaceholderText(
        "값을 입력하세요"
      );
      await userEvent.type(inputField, "테스트 값");
      expect(inputField).toHaveValue("테스트 값");
    });

    await step("확인 버튼 클릭", async () => {
      const confirmButton = within(document.body).getByText("확인");
      await userEvent.click(confirmButton);
    });

    await step("모달이 닫히고 입력 값이 제출되었는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByPlaceholderText(
          "값을 입력하세요"
        );
        expect(modalContent).not.toBeInTheDocument();

        const statusElement = canvas.getByTestId("submitted-value");
        expect(statusElement).toHaveTextContent("제출된 값: 테스트 값");
      });
    });
  },
};

export const CancelInputInteraction: Story = {
  render: () => <PromptModalWithInteractions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("모달 열기 버튼 클릭", async () => {
      const openButton = canvas.getByTestId("open-modal-btn");
      await userEvent.click(openButton);
    });

    await step("값 입력하기", async () => {
      const inputField = within(document.body).getByPlaceholderText(
        "값을 입력하세요"
      );
      await userEvent.type(inputField, "취소될 값");
    });

    await step("취소 버튼 클릭", async () => {
      const cancelButton = within(document.body).getByText("취소");
      await userEvent.click(cancelButton);
    });

    await step("모달이 닫히고 값이 제출되지 않았는지 확인", async () => {
      await waitFor(() => {
        const modalContent = within(document.body).queryByPlaceholderText(
          "값을 입력하세요"
        );
        expect(modalContent).not.toBeInTheDocument();

        const statusElement = canvas.getByTestId("submitted-value");
        expect(statusElement).toHaveTextContent("");
      });
    });
  },
};
