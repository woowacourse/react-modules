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
			control: "text",
			description: "모달 위치",
		},
		isCloseButton: {
			description: "닫기 버튼 여부",
		},
		isConfirmButton: {
			description: "확인 버튼 여부",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
		position: "center",
		isCloseButton: true,
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
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
				<Modal isOpen={isOpen} position={args.position} onClose={closeModal} isCloseButton={args.isCloseButton} isConfirmButton={args.isConfirmButton}>
					<CardCompany />
				</Modal>
			</>
		);
	},
};

export const AgreeModal: Story = {
	args: {
		position: "bottom",
		isConfirmButton: true,
		isCloseButton: false,
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
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
				<Modal isOpen={isOpen} position={args.position} onClose={closeModal} isCloseButton={args.isCloseButton} isConfirmButton={args.isConfirmButton}>
					<AgreeTermModal />
				</Modal>
			</>
		);
	},
};

const ButtonWrap = styled.div`
	position: absolute;
`;
