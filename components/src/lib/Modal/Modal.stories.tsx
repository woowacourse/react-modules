import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Modal from "./Modal";
import "../../index.css";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "Modal",
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "center",
    title: { position: "left", content: "🍀호프는 몇 살일까🍀" },
    isOpen: true,
    onClose: fn(),
    closeButton: { onClose: () => alert(`'close' 버튼이 클릭되었습니다.`) },
    footerButtons: [
      {
        content: "동의하고 저장하기",
        onClick: () => alert(`'동의하고 저장하기' 버튼이 클릭되었습니다.`),
        className: "confirmButton",
        style: {
          background: "rgba(51, 51, 51, 1)",
          color: "white",
        },
      },
    ],
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "15px",
        }}
      >
        <div>
          <input type="checkbox" id="20" />
          <label htmlFor="20" style={{ marginLeft: "5px" }}>
            20살^^
          </label>
        </div>
        <div>
          <input type="checkbox" id="29" />
          <label htmlFor="29" style={{ marginLeft: "5px" }}>
            29살
          </label>
        </div>
        <div>
          <input type="checkbox" id="30" />
          <label htmlFor="30" style={{ marginLeft: "5px" }}>
            30살
          </label>
        </div>
        <div>
          <input type="checkbox" id="31" />
          <label htmlFor="31" style={{ marginLeft: "5px" }}>
            31살
          </label>
        </div>
      </div>
    ),
  },
};
