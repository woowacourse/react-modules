import { checkEmptyValue, checkLength, checkMonthRange, checkNumber, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

const MAX_LENGTH = 2;
const MIN_RANGE = 1;
const MAX_RANGE = 12;

export const expirationMonthErrorCases = [
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
	{
		validate: (value: string) => checkMonthRange(value),
		errorMessage: ERROR.OUT_RANGE(MIN_RANGE, MAX_RANGE),
	},
];

const useExpirationMonth = () => {
	const { value, onChange } = usePureNumberState();

	return { expirationMonth: value, onChange, cardExpirationMonthError: getError(value, expirationMonthErrorCases) };
};
export default useExpirationMonth;
