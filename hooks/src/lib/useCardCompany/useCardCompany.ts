import { useState } from "react";
import { checkEmptyValue, getError } from "../utils/vaildate";

export const cardCompanyErrorCases = [
	{
		validate: (value: string) => checkEmptyValue(value),
		errorMessage: "값을 입력해주세요.",
	},
];

const useCardCompany = () => {
	const [cardCompany, setCardCompany] = useState<string | null>(null);

	const onChange = (value: string) => {
		const cardCompanyInput = value.replace(/-/g, "");

		setCardCompany(cardCompanyInput);
	};

	return { cardCompany, onChange, cardCompanyError: getError(cardCompany, cardCompanyErrorCases) };
};

export default useCardCompany;
