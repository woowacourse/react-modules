import { useState } from "react";

const MONTH_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INVALID_MONTH_RANGE: "1~12까지의 범위만 입력 가능합니다.",
	INVALID_MONTH_FORMAT: "MM형태로 입력해주세요.",
};

const useExpirationMonth = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);

	const checkLength = (value: string) => {
		if (value.length < MONTH_VALID_LENGTH) {
			return false;
		}
		return true;
	};

	const checkNumber = (value: string) => {
		if (!/^\d+$/.test(value)) {
			return false;
		}
		return true;
	};

	const checkMonthRange = (value: string) => {
		if (Number(value) < 1 && Number(value) > 12) return false;
	};

	const validate = (value: string) => {
		const isValidLength = checkLength(value);
		const isNumber = checkNumber(value);
		const isValidRange = checkMonthRange(value);

		if (!isValidLength) {
			setErrorMessage([...errorMessage, ERROR_MESSAGE.INVALID_MONTH_FORMAT]);
		}
		if (!isNumber) {
			setErrorMessage([ERROR_MESSAGE.INVALID_NUMBER]);
			setIsValid(false);
		}

		if (!isValidRange) {
			setErrorMessage([ERROR_MESSAGE.INVALID_MONTH_RANGE]);
			setIsValid(false);
		}

		setIsValid(errorMessage.length === 0);
	};

	return { isValid, errorMessage, validate };
};

export default useExpirationMonth;
