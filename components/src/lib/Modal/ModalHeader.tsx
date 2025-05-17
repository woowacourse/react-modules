import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { Header, Title, CloseButton } from "./styles";

export const ModalHeader = ({ children, showCloseButton }: { children: React.ReactNode; showCloseButton?: boolean }) => {
	const context = useContext(ModalContext);

	return (
		<Header>
			<Title>{children}</Title>
			{showCloseButton && <CloseButton onClick={context?.onClose}>X</CloseButton>}
		</Header>
	);
};
