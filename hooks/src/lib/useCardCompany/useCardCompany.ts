import { useState } from "react";
import { checkEmptyValue } from "../utils/vaildate";

const ERROR_MESSAGE = {
	EMPTY_CARD_COMPANY: "카드사를 선택해주세요.",
};

const useCardCompany = () => {
	const [error, setError] = useState({
		isValid: true,
		errorMessage: "",
	});

	const validate = (value: string) => {
		const isEmptyValue = checkEmptyValue(value);

		if (!isEmptyValue) {
			setError({ isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_CARD_COMPANY });

			return;
		}
	};

	return { error, validate };
};

export default useCardCompany;
