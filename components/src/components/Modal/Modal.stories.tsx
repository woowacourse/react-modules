import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { useEffect, useState } from "react";
import Modal, { ModalProps } from "./Modal";

const meta = {
  title: "modal/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "모달의 위치 지정",
      control: { type: "radio" },
      options: ["center", "bottom"],
      table: { defaultValue: { summary: "center" } },
    },
    size: {
      description: "모달 가로 크기 설정",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      table: { defaultValue: { summary: "medium" } },
    },
    title: {
      description: "모달의 제목 및 스타일 설정",
      table: {
        type: { summary: "{ text?: string; color?: string; size?: number; }" },
      },
    },
    showCloseButton: {
      description: "닫기 버튼 표시 여부",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
    theme: {
      description: "모달 테마 설정",
      control: { type: "radio" },
      options: ["light", "dark"],
      table: { defaultValue: { summary: "light" } },
    },
    children: {
      description: "모달 내부에 표시될 콘텐츠",
    },
    isOpen: {
      description: "모달 열림 상태",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "모달 닫기 함수",
      action: "closed",
      table: { type: { summary: "() => void" } },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal {...args} isOpen={isOpen} onClose={closeModal}>
        {args.children ?? "Default Contents"}
      </Modal>
    </>
  );
};

export const WithoutCloseButton = (args: ModalProps) => (
  <Default
    {...args}
    title={{ text: "Without Close Button" }}
    showCloseButton={false}
  >
    Without Close Button Contents
  </Default>
);

export const ModalInLightMode = (args: ModalProps) => (
  <Default {...args} title={{ text: "Light Mode" }} theme="light">
    Light Mode Contents
  </Default>
);

export const ModalInDarkMode = (args: ModalProps) => (
  <Default {...args} title={{ text: "Dark Mode" }} theme="dark">
    <div style={{ color: "#fff" }}>Dark Mode Contents</div>
  </Default>
);

export const ModalInDarkModeWithActionButtons = (args: ModalProps) => (
  <Default {...args} title={{ text: "Dark Mode" }} theme="dark">
    <p style={{ color: "#fff" }}>Dark Mode Contents</p>
    <div style={{ display: "flex", width: "100%", gap: "10px" }}>
      <Modal.ActionButtons />
    </div>
  </Default>
);

export const BottomModal = (args: ModalProps) => (
  <Default {...args} position="bottom" title={{ text: "Bottom Mode" }}>
    Bottom Modal Contents
  </Default>
);

export const SmallSizeModal = (args: ModalProps) => (
  <Default {...args} size="small" title={{ text: "Small Size Modal" }}>
    Small Size Modal Contents
  </Default>
);

export const MediumSizeModal = (args: ModalProps) => (
  <Default {...args} size="medium" title={{ text: "Medium Size Modal" }}>
    Medium Size Modal Contents
  </Default>
);

export const LargeSizeModal = (args: ModalProps) => (
  <Default {...args} size="large" title={{ text: "Large Size Modal" }}>
    Large Size Modal Contents
  </Default>
);

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
          <button onClick={closeModal} data-testid="close-modal-btn">
            모달 닫기
          </button>
        </div>
      </Modal>
    </>
  );
};

export const ModalOpenAndCloseInteraction: Story = {
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

export const ModalCloseWithEscapeKeyInteraction: Story = {
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

export const AlertModalWithButton = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "아이디를 입력해 주세요." }}
      >
        <p>아이디는 필수로 입력해야 합니다.</p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Modal.Button style={{ width: "90px" }} onClick={closeModal}>
            확인
          </Modal.Button>
        </div>
      </Modal>
    </>
  );
};

export const AlertModalWithConfirmButton = (args: ModalProps) => (
  <Default {...args} title={{ text: "아이디를 입력해 주세요." }}>
    <p>아이디는 필수로 입력해야 합니다.</p>
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <Modal.ConfirmButton style={{ width: "90px" }} />
    </div>
  </Default>
);

export const ConfirmModalWithButtonGroup = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = () => {
    alert("확인 버튼 클릭");
    closeModal();
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "카드를 삭제하시겠습니까?" }}
      >
        <p>삭제하면 복구하실 수 없습니다.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "10px",
          }}
        >
          <Modal.ButtonGroup
            leftProps={{
              onClick: closeModal,
              children: "취소",
              varient: "secondary",
              style: { width: "90px" },
            }}
            rightProps={{
              onClick: handleSubmit,
              children: "확인",
              varient: "primary",
              style: { width: "90px" },
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export const ConfirmModalWithActionButtons = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = () => {
    alert("확인 버튼 클릭");
    closeModal();
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "카드를 삭제하시겠습니까?" }}
      >
        <p>삭제하면 복구하실 수 없습니다.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "10px",
          }}
        >
          <Modal.ActionButtons
            onConfirm={handleSubmit}
            confirmProps={{ style: { width: "90px" } }}
            cancelProps={{ style: { width: "90px" } }}
          />
        </div>
      </Modal>
    </>
  );
};

export const PromptModalWithButtonGroup = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  /**
   * ButtonGroup 사용 시 닫기 동작
   * -----------------------------
   * ButtonGroup은 단순 버튼 배치 컴포넌트로, 모달 닫기 기능이 자동으로 연결되지 않음
   * 따라서 onClick 핸들러에 closeModal 함수를 명시적으로 호출해야함
   */
  const handleSubmit = () => {
    alert(`입력된 쿠폰 번호: ${inputValue}`);
    closeModal();
    setInputValue("");
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "쿠폰 번호를 입력해 주세요." }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <Modal.Input
            placeholder="CGEXX46Z"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              gap: "10px",
            }}
          >
            <Modal.ButtonGroup
              leftProps={{
                onClick: closeModal,
                children: "취소",
                varient: "secondary",
                style: { width: "90px" },
              }}
              rightProps={{
                onClick: handleSubmit,
                children: "확인",
                varient: "primary",
                style: { width: "90px" },
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export const PromptModalWithActionButtons = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  const openModal = () => setIsOpen(true);

  /**
   * ActionButtons 사용 시 닫기 동작
   * -----------------------------
   * ActionButtons는 Modal 컨텍스트와 통합되어 있어, onClose 함수를 자동으로 호출함
   * ConfirmButton은 사용자 정의 onClick 핸들러(handleSubmit) 실행 후 자동으로 모달을 닫음
   * CancelButton은 항상 자동으로 모달을 닫음
   */
  const handleSubmit = () => {
    alert(`입력된 쿠폰 번호: ${inputValue}`);
    setInputValue("");
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "쿠폰 번호를 입력해 주세요." }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <Modal.Input
            placeholder="CGEXX46Z"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              gap: "10px",
            }}
          >
            <Modal.ActionButtons
              onConfirm={handleSubmit}
              confirmProps={{ style: { width: "90px" } }}
              cancelProps={{ style: { width: "90px" } }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
