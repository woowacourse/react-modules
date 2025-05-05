import { createContext, useContext, ReactNode } from "react";
import styled from "@emotion/styled";

interface ModalContextProps {
	onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export interface ModalRootProps {
	isOpen: boolean;
	onClose: () => void;
	position?: "center" | "bottom";
	children?: ReactNode;
}

const ModalRoot = ({ isOpen, onClose, position = "center", children }: ModalRootProps) => {
	if (!isOpen) return null;

	return (
		<ModalContext.Provider value={{ onClose }}>
			<Overlay onClick={onClose}>
				<Container position={position}>{children}</Container>
			</Overlay>
		</ModalContext.Provider>
	);
};

export interface ModalHeaderProps {
	children: ReactNode;
	showCloseButton?: boolean;
}

const ModalHeader = ({ children, showCloseButton }: ModalHeaderProps) => {
	const context = useContext(ModalContext);

	return (
		<Header>
			<Title>{children}</Title>
			{showCloseButton && <CloseButton onClick={context?.onClose}>X</CloseButton>}
		</Header>
	);
};

export const ModalBody = styled.div`
	width: 100%;
`;

export const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	gap: 12px;
	margin-top: 12px;
`;

export const ConfirmButton = styled.button`
	width: 100%;
	padding: 8px 0;
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	background: #333;
	color: #fff;
	cursor: pointer;
`;

export const CloseButton = styled.button`
	padding: 8px 0;
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	border-radius: 5px;
	background: #fff;
	cursor: pointer;
`;

export const Modal = Object.assign(ModalRoot, {
	Header: ModalHeader,
	Body: ModalBody,
	Footer: ModalFooter,
	ConfirmButton,
	CloseButton,
});

const Overlay = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div<{ position: "center" | "bottom" }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 24px 32px;
	border-radius: 8px;
	width: ${(props) => (props.position === "bottom" ? "100%" : "60%")};
	position: ${(props) => (props.position === "bottom" ? "fixed" : "relative")};
	bottom: ${(props) => (props.position === "bottom" ? "0" : "auto")};
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
