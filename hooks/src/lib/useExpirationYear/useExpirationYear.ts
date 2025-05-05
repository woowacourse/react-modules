import { useState } from "react";
import { checkLength, checkNumber, checkYearRange } from "../utils/vaildate";

const YEAR_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
	INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

const useExpirationYear = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const validate = (value: string) => {
		const isValidLength = checkLength(value, YEAR_VALID_LENGTH);
		const isNumber = checkNumber(value);
		const isValidRange = checkYearRange(value);

		if (!isValidLength) {
			setErrorMessage(ERROR_MESSAGE.INVALID_YEAR_FORMAT);
			setIsValid(false);
			return;
		}
		if (!isNumber) {
			setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
			setIsValid(false);
			return;
		}
		if (!isValidRange) {
			setErrorMessage(ERROR_MESSAGE.INVALID_YEAR_RANGE);
			setIsValid(false);
			return;
		}
	};

	return { isValid, errorMessage, validate };
};

export default useExpirationYear;
