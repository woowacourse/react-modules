import { useState } from "react";
import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";

const MAX_LENGTH = 3;

export const cardCvcErrorCases = [
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

const useCardCvc = () => {
	const [cardCvc, setCardCvc] = useState("");

	const onChange = (cardCvcInput: string) => {
		const pureCardNumber = cardCvcInput.replace(/-/g, "");

		setCardCvc(pureCardNumber);
	};

	return { cardCvc, onChange, cardCvcError: getError(cardCvc, cardCvcErrorCases) };
};
export default useCardCvc;
