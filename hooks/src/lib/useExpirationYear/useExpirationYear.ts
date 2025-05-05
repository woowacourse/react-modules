import { useState } from "react";
import { checkLength, checkNumber, checkYearRange } from "../utils/vaildate";

const YEAR_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
	INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

const useExpirationYear = () => {
	const [error, setError] = useState({
		isValid: true,
		errorMessage: "",
	});

	const validate = (value: string) => {
		const isValidLength = checkLength(value, YEAR_VALID_LENGTH);
		const isNumber = checkNumber(value);
		const isValidRange = checkYearRange(value);

		if (!isValidLength) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_YEAR_FORMAT });

			return;
		}
		if (!isNumber) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_NUMBER });

			return;
		}
		if (!isValidRange) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_YEAR_RANGE });

			return;
		}
	};

	return { error, validate };
};

export default useExpirationYear;
