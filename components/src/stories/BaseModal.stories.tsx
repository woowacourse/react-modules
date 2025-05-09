import type { Meta, StoryObj } from "@storybook/react";
import BaseModal from "../lib/BaseModal/BaseModal";

const meta: Meta<typeof BaseModal> = {
  title: "Components/Modal",
  component: BaseModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
- \`isModalOpen: boolean\` — 모달 열림/닫힘 여부
- \`position: "center" | "bottom"\` — 표시 위치
- \`title: string\` — 헤더에 표시할 제목
- \`onClose: () => void\` — 닫기 버튼 클릭 시 호출되는 콜백
- \`children: React.ReactNode\` — 모달 본문에 렌더링할 내용
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const centerOpen: Story = {
  args: {
    isModalOpen: true,
    position: "center",
    title: "제목",
    children: "이것은 모달 내용입니다.",
    onClose: () => {},
  },
};

export const bottomOpen: Story = {
  args: {
    isModalOpen: true,
    position: "bottom",
    title: "제목",
    children: "이것은 모달 내용입니다.",
    onClose: () => {},
  },
};
