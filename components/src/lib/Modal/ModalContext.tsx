import { createContext, useContext } from "react";

export interface ModalContextProps {
	onClose: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	return context;
};
