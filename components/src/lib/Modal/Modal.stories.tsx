import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../../modules/Button/Button";
import { useState } from "react";
import styled from "@emotion/styled";
import CardCompany from "./CardCompany";
import AgreeTermModal from "./AgreeTermModal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "모달의 위치",
      control: { type: "radio" },
      options: ["center", "bottom"],
    },
    isOpen: {
      description: "모달의 표시 여부",
      control: "boolean",
    },
    showCloseButton: {
      description: "닫기 버튼 표시 여부",
      control: "boolean",
      defaultValue: false,
    },
    showConfirmButton: {
      description: "확인 버튼 표시 여부",
      control: "boolean",
      defaultValue: false,
    },
    onClose: {
      description: "모달이 닫힐 때 호출되는 함수",
      action: "closed",
    },
    children: {
      description: "모달 내부에 표시할 콘텐츠",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    position: "center",
    isOpen: false,
    showCloseButton: true,
    showConfirmButton: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <ModalContent>
            <h3>기본 모달</h3>
            <p>이것은 기본 모달 콘텐츠입니다.</p>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const BottomModal: Story = {
  args: {
    position: "bottom",
    isOpen: false,
    showConfirmButton: true,
    showCloseButton: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <ModalContent>
            <h3>하단 모달</h3>
            <p>
              이것은 화면 하단에 표시되는 모달입니다. 모바일 환경에서 많이
              사용되는 UI 패턴입니다.
            </p>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const TermsAgreementModal: Story = {
  args: {
    position: "center",
    isOpen: false,
    showConfirmButton: true,
    showCloseButton: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <AgreeTermModal />
        </Modal>
      </>
    );
  },
};

export const CompanyCardModal: Story = {
  args: {
    position: "center",
    isOpen: false,
    showCloseButton: true,
    showConfirmButton: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
      <>
        <ButtonWrap>
          <Button onclick={openModal} />
        </ButtonWrap>
        <Modal
          isOpen={isOpen}
          position={args.position}
          onClose={closeModal}
          showCloseButton={args.showCloseButton}
          showConfirmButton={args.showConfirmButton}
        >
          <CardCompany />
        </Modal>
      </>
    );
  },
};

const ModalContent = styled.div`
  padding: 8px 0;

  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
`;
