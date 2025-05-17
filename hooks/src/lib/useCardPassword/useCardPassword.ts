import { useState } from "react";
import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";

const MAX_LENGTH = 2;
const cardPasswordErrorCases = [
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

const useCardPassword = () => {
	const [cardPassword, setCardPassword] = useState("");

	const onChange = (cardCvcInput: string) => {
		const pureCardNumber = cardCvcInput.replace(/-/g, "");

		setCardPassword(pureCardNumber);
	};

	return { cardPassword, onChange, cardPasswordError: getError(cardPassword, cardPasswordErrorCases) };
};
export default useCardPassword;
