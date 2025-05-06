import { useState } from "react";

interface ValidationResult {
	isValid: boolean;
	errorMessage: string;
}

type Validator = (value: string) => ValidationResult;
type CardNumberField = "first" | "second" | "third" | "fourth";
type CardNumberError = Record<CardNumberField, ValidationResult>;

const useCardNumber = (validators: Validator[]) => {
	const [value, setValue] = useState({ first: "", second: "", third: "", fourth: "" });
	const [error, setError] = useState<CardNumberError>({
		first: { isValid: true, errorMessage: "" },
		second: { isValid: true, errorMessage: "" },
		third: { isValid: true, errorMessage: "" },
		fourth: { isValid: true, errorMessage: "" },
	});

	const validate = (label: string, value: string) => {
		for (const validator of validators) {
			const result = validator(value);
			if (!result.isValid) {
				setError({
					...error,
					[label]: {
						...error[label as CardNumberField],
						isValid: false,
						errorMessage: result.errorMessage,
					},
				});
				return;
			}
		}
		setError((prev) => ({
			...prev,
			[label]: { isValid: true, errorMessage: "" },
		}));
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>, label: CardNumberField) => {
		const { value } = e.target;
		setValue((prev) => ({ ...prev, [label]: value }));
		validate(label, value);
	};

	return { value, error, onChange, validate };
};
export default useCardNumber;
