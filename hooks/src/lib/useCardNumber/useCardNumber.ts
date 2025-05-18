import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

const MAX_LENGTH = 4;
export const cardNumberErrorCases = [
	{
		validate: (value: string) => checkEmptyValue(value),
		errorMessage: ERROR.EMPTY_VALUE,
	},
	{
		validate: (value: string) => checkNumber(value),
		errorMessage: ERROR.ONLY_NUMBER,
	},
	{
		validate: (value: string) => checkLength(value, MAX_LENGTH),
		errorMessage: ERROR.MAX_LENGTH(MAX_LENGTH),
	},
];

const useCardNumber = () => {
	const { value, onChange } = usePureNumberState();

	return { cardNumber: value, onChange, cardNumberError: getError(value, cardNumberErrorCases) };
};
export default useCardNumber;
