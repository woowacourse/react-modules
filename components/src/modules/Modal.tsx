import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ModalProps {
	position: "center" | "bottom";
	isOpen: boolean;
	children: ReactNode;
}

const Modal = ({ position, isOpen, children = null }: ModalProps) => {
	return (
		<>
			<ModalLayout isOpen={isOpen}>
				<ModalContainer position={position}>{children}</ModalContainer>
			</ModalLayout>
		</>
	);
};

export default Modal;

const ModalLayout = styled.div<{ isOpen: boolean }>`
	z-index: 2;
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ position: string }>`
	z-index: 3;
	width: ${(props) => (props.position === "bottom" ? "100%" : "60%")};
	margin: ${(props) => (props.position === "bottom" ? "auto 0 0 0" : "auto")};
	height: auto;
	display: flex;
	padding: 24px 32px;
	border-radius: 8px;
	background-color: #fff;
`;
