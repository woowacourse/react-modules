import { useState } from "react";

const usePureNumberState = () => {
	const [value, setValue] = useState("");

	const onChange = (originalInput: string) => {
		const pureValue = originalInput.replace(/-/g, "");
		setValue(pureValue);
	};

	return { value, onChange };
};

export default usePureNumberState;
