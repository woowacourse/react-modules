import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../../modules/Button/Button";
import { useState } from "react";
import styled from "@emotion/styled";

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

const CardChoose = () => {
	return (
		<Container>
			<Header>
				<Title>카드사 선택</Title>
			</Header>
			<CardContainer>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
			</CardContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	margin: 0;
	font-size: 18px;
	font-weight: 700;
`;

const CardImg = styled.img`
	margin: 0 auto;
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	margin: 24px 0;
`;

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
					<CardChoose />
				</Modal>
			</>
		);
	},
};

const ButtonWrap = styled.div`
	position: absolute;
`;
