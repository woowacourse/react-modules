import { useState } from "react";
import { checkLength, checkMonthRange, checkNumber } from "../utils/vaildate";

const MONTH_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INVALID_MONTH_RANGE: "1~12까지의 범위만 입력 가능합니다.",
	INVALID_MONTH_FORMAT: "MM형태로 입력해주세요.",
};

const useExpirationMonth = () => {
	const [error, setError] = useState({
		isValid: true,
		errorMessage: "",
	});

	const validate = (value: string) => {
		const isValidLength = checkLength(value, MONTH_VALID_LENGTH);
		const isNumber = checkNumber(value);
		const isValidRange = checkMonthRange(value);

		if (!isValidLength) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_MONTH_FORMAT });

			return;
		}
		if (!isNumber) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_NUMBER });

			return;
		}

		if (!isValidRange) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_MONTH_RANGE });

			return;
		}
	};

	return { error, validate };
};

export default useExpirationMonth;
