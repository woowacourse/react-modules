import { createContext, useContext, ReactNode, useRef, useEffect } from "react";
import styled from "@emotion/styled";

interface ModalContextProps {
	onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);
const FOCUSABLE_SELECTOR = "button, input";

const focusFirstElement = (container: HTMLElement | null) => {
	if (!container) return;
	const elements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
	elements[0]?.focus();
};

const onFocus = (e: KeyboardEvent, modalContainer: HTMLElement | null) => {
	if (e.key !== "Tab" || !modalContainer) return;

	const focusables = Array.from(modalContainer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
	if (focusables.length === 0) return;

	const firstElement = focusables[0];
	const lastElement = focusables[focusables.length - 1];
	const active = document.activeElement;

	if (e.shiftKey && active === firstElement) {
		e.preventDefault();
		lastElement.focus();
	} else if (!e.shiftKey && active === lastElement) {
		e.preventDefault();
		firstElement.focus();
	}
};

export interface ModalRootProps {
	isOpen: boolean;
	onClose: () => void;
	modalPosition?: "center" | "bottom";
	children?: ReactNode;
	size?: "small" | "medium" | "large" | "full";
}

const WIDTH_MAP = {
	small: "320px",
	medium: "480px",
	large: "600px",
	full: "100%",
};

const ModalRoot = ({ isOpen, onClose, modalPosition = "center", children, size = "medium" }: ModalRootProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		const modalContainer = containerRef.current;
		focusFirstElement(modalContainer);
		modalContainer?.addEventListener("keydown", (e: KeyboardEvent) => onFocus(e, modalContainer));
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<ModalContext.Provider value={{ onClose }}>
			<Overlay>
				<div>
					<Container position={modalPosition} size={size} ref={containerRef}>
						{children}
					</Container>
				</div>
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

export const ModalInput = ({ placeholder, onChange }: { placeholder: string; onChange?: () => void }) => {
	return <Input placeholder={placeholder} onChange={onChange} />;
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

export const Input = styled.input`
	width: 100%;
	margin-top: 16px;
	padding: 8.5px 0 8.5px 8px;
	font-size: 11px;
`;

export const ActionButton = styled.button`
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

	&:focus {
		outline: 2px solid #007aff;
	}
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

	&:focus {
		outline: 2px solid #007aff;
	}
`;

const Modal = Object.assign(ModalRoot, {
	Header: ModalHeader,
	Body: ModalBody,
	Footer: ModalFooter,
	ActionButton,
	CloseButton,
	ModalInput,
});

export default Modal;

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

const Container = styled.div<{ position: "center" | "bottom"; size: "small" | "medium" | "large" | "full" }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 24px 32px;
	border-radius: 8px;
	width: ${(props) => WIDTH_MAP[props.size]};
	position: ${(props) => (props.position === "bottom" ? "absolute" : "relative")};
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
