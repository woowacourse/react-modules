import { useState } from "react";
import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";

const MAX_LENGTH = 4;
export const cardNumberErrorCases = [
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
];

const useCardNumber = () => {
	const [cardNumber, setCardNumber] = useState("");

	const onChange = (cardNumberInput: string) => {
		const pureCardNumber = cardNumberInput.replace(/-/g, "");

		setCardNumber(pureCardNumber);
	};

	return { cardNumber, onChange, cardNumberError: getError(cardNumber, cardNumberErrorCases) };
};
export default useCardNumber;
