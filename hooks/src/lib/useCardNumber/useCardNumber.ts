import { useState } from "react";

const CARDNUMBER_VALID_LENGTH = 4;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INPUT_LENGTH_LIMIT: `${CARDNUMBER_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardNumber = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);

	const checkNumber = (value: string) => {
		if (!/^\d+$/.test(value)) return false;
	};

	const checkLength = (value: string) => {
		if (value.length < CARDNUMBER_VALID_LENGTH) return false;
	};

	const validate = (value: string) => {
		const isNumber = checkNumber(value);
		const isValidLength = checkLength(value);

		if (!isNumber) {
			setErrorMessage([ERROR_MESSAGE.INVALID_NUMBER]);
			setIsValid(false);
		}

		if (!isValidLength) {
			setErrorMessage([...errorMessage, ERROR_MESSAGE.INPUT_LENGTH_LIMIT]);
		}

		setIsValid(errorMessage.length === 0);
	};

	return { isValid, errorMessage, validate };
};
export default useCardNumber;
