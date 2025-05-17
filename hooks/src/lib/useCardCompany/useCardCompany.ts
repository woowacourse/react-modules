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

	const onChange = (value: string) => {
		const cardCompanyInput = value.replace(/-/g, "");

		setCardCompany(cardCompanyInput);
	};

	return { cardCompany, onChange, cardCompanyError: getError(cardCompany, errorCases) };
};

export default useCardCompany;
