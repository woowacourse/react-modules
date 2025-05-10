import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import Button from "../Button/Button";

import useModal from "../../hooks/useModal";
import Input from "../Input/Input";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <ModalContent position="center">
            <ModalHeader direction="row" align="start" justify="start">
              <ModalTitle tag="h1" fontSize="25px" fontWeight="700">
                Title이다!
              </ModalTitle>
              <ModalCloseButton onClose={handleClose} />
            </ModalHeader>
            <ModalBody>몸통이다!</ModalBody>
            <ModalFooter direction="row" align="end" justify="center">
              Footer이다!
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Alert: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                아이디를 입력해 주세요.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>아이디는 필수로 입력해야 합니다.</Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Button color="dark" size="small">
                확인
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Confirm: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                카드를 삭제하시겠습니까?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>삭제하면 복구하실 수 없습니다.</Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Button color="light" size="small">
                취소
              </Button>
              <Button color="dark" size="small">
                확인
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Prompt: Story = {
  args: {
    children: "",
    isOpen: true,
    onClose: () => {},
  },

  render: () => {
    const { handleClose } = useModal();

    return (
      <>
        <Modal isOpen={true} onClose={handleClose}>
          <Modal.Content position="center" size="medium">
            <Modal.Header direction="row" align="start" justify="start">
              <Modal.Title tag="h1" fontSize="25px" fontWeight="700">
                쿠폰 번호를 입력해 주세요.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Input placeholder="쿠폰 번호 입력" />
            </Modal.Body>
            <Modal.Footer direction="row" align="end" justify="end">
              <Button color="light" size="small">
                취소
              </Button>
              <Button color="dark" size="small">
                확인
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
