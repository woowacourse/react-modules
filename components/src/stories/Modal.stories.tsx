import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";
import { useEffect, useState } from "react";
import { ModalProps } from "../lib/types";

const meta: Meta<ModalProps & { size: "small" | "medium" | "large" | "default" }> = {
  title: "Modal",
  component: Modal,
  argTypes: {
    show: { control: "boolean" },
    size: {
      control: { type: "radio" }, // 혹은 select
      options: ["small", "medium", "large", "default"],
    },
  },
  args: {
    show: true,
    size: "default",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Modal은 위치와 배경 설정이 가능하며, 하위 컴포넌트로 유연하게 구성할 수 있는 재사용 가능한 오버레이 UI입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps & { size: "small" | "medium" | "large" | "default" }>;

export const ModalComponent: Story = {
  render: (args, { updateArgs }) => {
    const [internalShow, setInternalShow] = useState(args.show);

    // args.show가 바뀌면 내부 상태도 따라감 (Controls -> 컴포넌트)
    useEffect(() => {
      setInternalShow(args.show);
    }, [args.show]);

    const handleHide = () => {
      setInternalShow(false); // UI상 꺼짐
      updateArgs?.({ show: false }); // Controls 상태도 꺼짐
    };

    return (
      <Modal {...args} show={internalShow} onHide={handleHide}>
        <Modal.BackDrop />
        <Modal.Container size={args.size}>
          <Modal.Header style={{ color: "red" }} closeButton>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Container>
      </Modal>
    );
  },
};

export const ModalAlertComponent: Story = {
  render: (args, { updateArgs }) => {
    const [internalShow, setInternalShow] = useState(args.show);

    useEffect(() => {
      setInternalShow(args.show);
    }, [args.show]);

    const handleHide = () => {
      setInternalShow(false);
      updateArgs?.({ show: false });
    };

    return (
      <Modal {...args} show={internalShow} onHide={handleHide}>
        <Modal.BackDrop />
        <Modal.AlertContainer
          title="아이디를 입력해 주세요."
          description="아이디는 필수로 입력해야 합니다."
          size={args.size}
        />
      </Modal>
    );
  },
};

export const ModalConfirmComponent: Story = {
  render: (args, { updateArgs }) => {
    const [internalShow, setInternalShow] = useState(args.show);

    useEffect(() => {
      setInternalShow(args.show);
    }, [args.show]);

    const handleHide = () => {
      setInternalShow(false);
      updateArgs?.({ show: false });
    };

    return (
      <Modal {...args} show={internalShow} onHide={handleHide}>
        <Modal.BackDrop />
        <Modal.AlertContainer
          title="카드를 삭제하시겠습니까?"
          description="삭제하면 복구하실 수 없습니다."
          onClick={() => console.log("카드삭제")}
          size={args.size}
        />
      </Modal>
    );
  },
};

export const ModalPromptComponent: Story = {
  render: (args, { updateArgs }) => {
    const [internalShow, setInternalShow] = useState(args.show);
    const [value, setValue] = useState("");

    useEffect(() => {
      setInternalShow(args.show);
    }, [args.show]);

    const handleHide = () => {
      setInternalShow(false);
      updateArgs?.({ show: false });
    };

    return (
      <Modal {...args} show={internalShow} onHide={handleHide}>
        <Modal.BackDrop />
        <Modal.PromptContainer
          title="쿠폰 번호를 입력해 주세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => console.log(value)}
          size={args.size}
        />
      </Modal>
    );
  },
};
