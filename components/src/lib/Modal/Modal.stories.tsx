import type { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalInput } from "./Modal";
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
		modalPosition: {
			control: "text",
			description: "모달 위치 (center, bottom)",
		},
		size: {
			control: "select",
			description: "모달 사이즈 (small, medium, large, full)",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const CardCompanyModal: Story = {
	args: {
		modalPosition: "center",
		size: "small",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition={args.modalPosition} size={args.size}>
					<Modal.Header showCloseButton>카드사 선택</Modal.Header>
					<Modal.Body>
						<CardCompany />
					</Modal.Body>
				</Modal>
			</>
		);
	},
};

export const AgreeModal: Story = {
	args: {
		modalPosition: "bottom",
		size: "medium",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition={args.modalPosition} size={args.size}>
					<Modal.Header showCloseButton>약관 동의</Modal.Header>
					<Modal.Body>
						<AgreeTermModal />
					</Modal.Body>
					<Modal.Footer>
						<Modal.ActionButton onClick={() => setIsOpen(false)}>확인</Modal.ActionButton>
					</Modal.Footer>
				</Modal>
			</>
		);
	},
};

export const AlertModal: Story = {
	args: {
		modalPosition: "center",
		size: "medium",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition={args.modalPosition} size={args.size}>
					<Modal.Header>아이디를 입력해 주세요.</Modal.Header>
					<Modal.Body>
						<Text>아이디는 필수로 입력해야 합니다.</Text>
					</Modal.Body>
					<Footer>
						<ConfirmButton onClick={() => setIsOpen(false)}>확인</ConfirmButton>
					</Footer>
				</Modal>
			</>
		);
	},
};

export const ConfirmModal: Story = {
	args: {
		modalPosition: "center",
		size: "medium",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition={args.modalPosition} size={args.size}>
					<Modal.Header>카드를 삭제하시겠습니까?</Modal.Header>
					<Modal.Body>
						<Text>삭제하면 복구하실 수 없습니다.</Text>
					</Modal.Body>
					<Footer>
						<CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
						<ConfirmButton onClick={() => setIsOpen(false)}>확인</ConfirmButton>
					</Footer>
				</Modal>
			</>
		);
	},
};

export const PromptModal: Story = {
	args: {
		modalPosition: "center",
		size: "medium",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} modalPosition={args.modalPosition} size={args.size}>
					<Modal.Header>쿠폰 번호를 입력해 주세요.</Modal.Header>
					<Modal.Body>
						<ModalInput placeholder="" />
					</Modal.Body>
					<Footer>
						<CancelButton onClick={() => setIsOpen(false)}>취소</CancelButton>
						<ConfirmButton onClick={() => setIsOpen(false)}>확인</ConfirmButton>
					</Footer>
				</Modal>
			</>
		);
	},
};

const ButtonWrap = styled.div`
	position: absolute;
`;

const Text = styled.p`
	margin-top: 16px;
	font-weight: 500;
	font-size: 12px;
	color: #0a0d13;
`;

const Footer = styled(Modal.Footer)`
	display: flex;
	justify-content: end;
	gap: 12px;
`;

const ConfirmButton = styled(Modal.ActionButton)`
	width: 80px;
`;

const CancelButton = styled(Modal.ActionButton)`
	width: 80px;
	border: 1px solid #333333;
	font-weight: 700;
	font-size: 15px;
	color: #333333;
	background-color: #fff;
`;
