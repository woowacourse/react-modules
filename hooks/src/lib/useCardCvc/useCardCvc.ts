import { useState } from "react";
import { checkLength, checkNumber } from "../utils/vaildate";

const CVC_VALID_LENGTH = 3;

const ERROR_MESSAGE = {
	INVALID_NUMBER: "숫자만 입력 가능합니다.",
	INPUT_LENGTH_LIMIT: `${CVC_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardCvc = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const validate = (value: string) => {
		const isNumber = checkNumber(value);
		const isValidLength = checkLength(value, CVC_VALID_LENGTH);

		if (!isNumber) {
			setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
			setIsValid(false);
			return;
		}

		if (!isValidLength) {
			setErrorMessage(ERROR_MESSAGE.INPUT_LENGTH_LIMIT);
			setIsValid(false);
			return;
		}
	};

	return { isValid, errorMessage, validate };
};

export default useCardCvc;
