import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "../lib/AlertModal/AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal",
  component: AlertModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
- \`isModalOpen: boolean\` — 모달 열림/닫힘 여부
- \`title: string\` — 헤더에 표시할 제목
- \`description: string\` — 모달 본문에 표시할 설명
- \`onClose: () => void\` — 확인 버튼 클릭 시 호출되는 콜백
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Open: Story = {
  args: {
    isModalOpen: true,
    title: "아이디를 입력해 주세요.",
    description: "아이디는 필수로 입력해야 합니다.",
    onClose: () => {},
    size: "small",
  },
};

export const Closed: Story = {
  args: {
    isModalOpen: false,
    title: "아이디를 입력해 주세요.",
    description: "아이디는 필수로 입력해야 합니다.",
    onClose: () => {},
  },
};
