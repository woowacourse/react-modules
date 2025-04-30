import { useState } from "react";

const CARDNUMBER_VALID_LENGTH = 4;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INPUT_LENGTH_LIMIT: `${CARDNUMBER_VALID_LENGTH}자리를 입력해주세요.`,
};

interface CardNumberValid {
	first: boolean;
	second: boolean;
	third: boolean;
	fourth: boolean;
}

interface CardNumberErrorMessage {
	first: string;
	second: string;
	third: string;
	fourth: string;
}

const useCardNumber = () => {
	const [isValid, setIsValid] = useState<CardNumberValid>({ first: true, second: true, third: true, fourth: true });
	const [errorMessage, setErrorMessage] = useState<CardNumberErrorMessage>({ first: "", second: "", third: "", fourth: "" });

	const checkNumber = (value: string) => {
		if (!/^\d+$/.test(value)) {
			return false;
		}
		return true;
	};

	const checkLength = (value: string) => {
		if (value.length < CARDNUMBER_VALID_LENGTH) {
			return false;
		}
		return true;
	};

	const validate = (label: string, value: string) => {
		const isNumber = checkNumber(value);
		const isValidLength = checkLength(value);

		if (!isNumber) {
			setErrorMessage({ ...errorMessage, [label]: ERROR_MESSAGE.INVALID_NUMBER });
			setIsValid({ ...isValid, [label]: false });

			return;
		}

		if (!isValidLength) {
			setErrorMessage({ ...errorMessage, [label]: ERROR_MESSAGE.INPUT_LENGTH_LIMIT });
			setIsValid({ ...isValid, [label]: false });
			return;
		}
	};

	return { isValid, errorMessage, validate };
};
export default useCardNumber;
