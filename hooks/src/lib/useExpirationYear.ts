import { useState } from "react";

const YEAR_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
	INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

const useExpirationYear = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);

	const checkLength = (value: string) => {
		if (value.length < YEAR_VALID_LENGTH) return false;
	};

	const checkNumber = (value: string) => {
		if (!/^\d+$/.test(value)) return false;
	};

	const checkYearRange = (value: string) => {
		const currentYear = new Date().getFullYear() % 1000;

		if (Number(value) < currentYear) return false;
	};

	const validate = (value: string) => {
		const isValidLength = checkLength(value);
		const isNumber = checkNumber(value);
		const isValidRange = checkYearRange(value);

		if (!isValidLength) {
			setErrorMessage([...errorMessage, ERROR_MESSAGE.INVALID_YEAR_FORMAT]);
		}
		if (!isNumber) {
			setErrorMessage([ERROR_MESSAGE.INVALID_NUMBER]);
			setIsValid(false);
		}

		if (!isValidRange) {
			setErrorMessage([ERROR_MESSAGE.INVALID_YEAR_RANGE]);
			setIsValid(false);
		}

		setIsValid(errorMessage.length === 0);
	};

	return { isValid, errorMessage, validate };
};

export default useExpirationYear;
