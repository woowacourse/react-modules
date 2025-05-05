import { useState } from "react";
import { checkLength, checkNumber } from "../utils/vaildate";

const PASSWORD_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INPUT_LENGTH_LIMIT: `${PASSWORD_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardPassword = () => {
	const [error, setError] = useState({
		isValid: true,
		errorMessage: "",
	});

	const validate = (value: string) => {
		const isNumber = checkNumber(value);
		const isValidLength = checkLength(value, PASSWORD_VALID_LENGTH);

		if (!isNumber) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INVALID_NUMBER });

			return;
		}

		if (!isValidLength) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.INPUT_LENGTH_LIMIT });

			return;
		}
	};

	return { error, validate };
};

export default useCardPassword;
