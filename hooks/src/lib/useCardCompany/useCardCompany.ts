import { useState } from "react";
import { checkEmptyValue } from "../utils/vaildate";

const ERROR_MESSAGE = {
	EMPTY_CARD_COMPANY: "카드사를 선택해주세요.",
};

const useCardCompany = () => {
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const validate = (value: string) => {
		const isEmptyValue = checkEmptyValue(value);

		if (!isEmptyValue) {
			setIsValid(false);
			setErrorMessage(ERROR_MESSAGE.EMPTY_CARD_COMPANY);
			return;
		}
	};

	return { isValid, errorMessage, validate };
};

export default useCardCompany;
