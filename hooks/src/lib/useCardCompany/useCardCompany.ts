import { useState } from "react";
import { checkEmptyValue, getError } from "../utils/vaildate";

const useCardCompany = () => {
	const [cardCompany, setCardCompany] = useState<string | null>(null);
	const errorCases = [
		{
			validate: (value: string) => checkEmptyValue(value),
			errorMessage: "값을 입력해주세요.",
		},
	];

	const onChange = (cardCompanyInput: string) => {
		const pureCardNumber = cardCompanyInput.replace(/-/g, "");

		setCardCompany(pureCardNumber);
	};

	return { cardCompany, onChange, cardNumberError: getError(cardCompany, errorCases) };
};

export default useCardCompany;
