import { useState } from "react";
import { checkEmptyValue, checkLength, checkMonthRange, checkNumber, getError } from "../utils/vaildate";

const MAX_LENGTH = 2;

const useExpirationMonth = () => {
	const [expirationMonth, setExpirationMonth] = useState("");
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
			validate: (value: string) => checkMonthRange(value),
			errorMessage: "1~12까지의 범위만 입력 가능합니다.",
		},
	];

	const onChange = (cardCvcInput: string) => {
		const pureCardNumber = cardCvcInput.replace(/-/g, "");

		setExpirationMonth(pureCardNumber);
	};

	return { expirationMonth, onChange, cardExpirationMonthError: getError(expirationMonth, errorCases) };
};
export default useExpirationMonth;
