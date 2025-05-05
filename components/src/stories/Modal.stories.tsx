import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";
import { useEffect, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  argTypes: {
    show: { control: "boolean" },
  },
  args: {
    show: true,
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

type Story = StoryObj<typeof Modal>;

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
      <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Modal {...args} show={internalShow} onHide={handleHide}>
          <Modal.Background>
            <Modal.Container>
              <Modal.Header style={{ color: "red" }} closeButton>
                <Modal.Title>Title</Modal.Title>
              </Modal.Header>
              <Modal.Body>Body</Modal.Body>
              <Modal.Footer>Footer</Modal.Footer>
            </Modal.Container>
          </Modal.Background>
        </Modal>
      </div>
    );
  },
};
