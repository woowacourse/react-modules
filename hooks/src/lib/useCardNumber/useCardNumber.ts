import { useState } from "react";
import { checkLength, checkNumber } from "../utils/vaildate";

const CARDNUMBER_VALID_LENGTH = 4;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INPUT_LENGTH_LIMIT: `${CARDNUMBER_VALID_LENGTH}자리를 입력해주세요.`,
};

interface FieldErrorState {
	isValid: boolean;
	errorMessage: string;
}

type CardNumberField = "first" | "second" | "third" | "fourth";
type CardNumberError = Record<CardNumberField, FieldErrorState>;

const useCardNumber = () => {
	const [error, setError] = useState<CardNumberError>({
		first: {
			isValid: true,
			errorMessage: "",
		},
		second: {
			isValid: true,
			errorMessage: "",
		},
		third: {
			isValid: true,
			errorMessage: "",
		},
		fourth: {
			isValid: true,
			errorMessage: "",
		},
	});

	const validate = (label: string, value: string) => {
		const isNumber = checkNumber(value);
		const isValidLength = checkLength(value, CARDNUMBER_VALID_LENGTH);

		if (!isNumber) {
			setError({
				...error,
				[label]: {
					...error[label as CardNumberField],
					isValid: false,
					errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
				},
			});

			return;
		}

		if (!isValidLength) {
			setError({
				...error,
				[label]: {
					...error[label as CardNumberField],
					isValid: false,
					errorMessage: ERROR_MESSAGE.INPUT_LENGTH_LIMIT,
				},
			});

			return;
		}
	};

	return { error, validate };
};
export default useCardNumber;
