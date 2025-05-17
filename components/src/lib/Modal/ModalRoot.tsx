import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { ModalContext } from "./ModalContext";
import { focusFirstElement, handleFocusTrap } from "../useFocusTrap";
import { Container, Overlay } from "./styles";

const WIDTH_MAP = {
	small: "320px",
	medium: "480px",
	large: "600px",
	full: "100%",
};

export interface ModalRootProps {
	isOpen: boolean;
	onClose: () => void;
	modalPosition?: "center" | "bottom";
	children?: ReactNode;
	size?: "small" | "medium" | "large" | "full";
}

export const ModalRoot = ({ isOpen, onClose, modalPosition = "center", children, size = "medium" }: ModalRootProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		const modalContainer = containerRef.current;
		if (!modalContainer) return;

		const keydownHandler = (e: KeyboardEvent) => handleFocusTrap(e, modalContainer);

		focusFirstElement(modalContainer);
		modalContainer.addEventListener("keydown", keydownHandler);

		return () => {
			modalContainer.removeEventListener("keydown", keydownHandler);
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<ModalContext.Provider value={{ onClose }}>
			<Overlay>
				<Container position={modalPosition} size={WIDTH_MAP[size]} ref={containerRef}>
					{children}
				</Container>
			</Overlay>
		</ModalContext.Provider>
	);
};
