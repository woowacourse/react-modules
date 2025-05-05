import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
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
			description: "모달 위치 (center, bottom)",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const CardCompanyModal: Story = {
	args: {
		position: "center",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position={args.position}>
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
		position: "bottom",
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<ButtonWrap>
					<Button onclick={() => setIsOpen(true)} />
				</ButtonWrap>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position={args.position}>
					<Modal.Header showCloseButton>약관 동의</Modal.Header>
					<Modal.Body>
						<AgreeTermModal />
					</Modal.Body>
					<Modal.Footer>
						<Modal.ConfirmButton onClick={() => setIsOpen(false)}>확인</Modal.ConfirmButton>
					</Modal.Footer>
				</Modal>
			</>
		);
	},
};

const ButtonWrap = styled.div`
	position: absolute;
`;
