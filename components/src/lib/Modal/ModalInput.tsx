import { Input } from "./styles";

export const ModalInput = ({ placeholder, onChange }: { placeholder: string; onChange?: () => void }) => {
	return <Input placeholder={placeholder} onChange={onChange} />;
};
