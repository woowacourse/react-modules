import { checkEmptyValue, checkLength, checkNumber, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

const MAX_LENGTH = 2;
const cardPasswordErrorCases = [
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

const useCardPassword = () => {
	const { value, onChange } = usePureNumberState();

	return { cardPassword: value, onChange, cardPasswordError: getError(value, cardPasswordErrorCases) };
};
export default useCardPassword;
