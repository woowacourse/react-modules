import { useState } from "react";
import { checkEmptyValue, checkLength, checkNumber, checkYearRange, getError } from "../utils/vaildate";

const MAX_LENGTH = 2;

const useExpirationYear = () => {
	const [expirationYear, setExpirationYear] = useState("");
	const errorCases = [
		{
			validate: (value: string) => checkEmptyValue(value),
			errorMessage: "값을 입력해주세요.",
		},
		{
			validate: (value: string) => checkNumber(value),
			errorMessage: "숫자만 입력 가능합니다.",
		},
		{
			validate: (value: string) => checkLength(value, MAX_LENGTH),
			errorMessage: `${MAX_LENGTH}자리를 입력해주세요.`,
		},
		{
			validate: (value: string) => checkYearRange(value),
			errorMessage: "현재보다 이전년도는 입력할 수 없습니다.",
		},
	];

	const onChange = (cardCvcInput: string) => {
		const pureCardNumber = cardCvcInput.replace(/-/g, "");

		setExpirationYear(pureCardNumber);
	};

	return { expirationYear, onChange, cardExpirationYearError: getError(expirationYear, errorCases) };
};
export default useExpirationYear;
