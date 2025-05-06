import { useState } from "react";

type ValidationResult = {
	isValid: boolean;
	errorMessage: string;
};

type Validator = (value: string) => ValidationResult;

const useCardCvc = (validators: Validator[]) => {
	const [value, setValue] = useState("");
	const [error, setError] = useState({
		isValid: true,
		errorMessage: "",
	});

	const validate = (value: string) => {
		for (const validator of validators) {
			const result = validator(value);
			if (!result.isValid) {
				setError({ isValid: result.isValid, errorMessage: result.errorMessage });
				return;
			}
		}
		setError({ isValid: true, errorMessage: "" });
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		validate(newValue);
	};

	return { value, error, onChange, validate };
};

export default useCardCvc;
