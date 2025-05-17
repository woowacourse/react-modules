import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

const MAX_LENGTH = 3;

export const cardCvcErrorCases = [
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

const useCardCvc = () => {
	const { value, onChange } = usePureNumberState();

	return { cardCvc: value, onChange, cardCvcError: getError(value, cardCvcErrorCases) };
};
export default useCardCvc;
