import { checkEmptyValue, checkLength, checkNumber, checkYearRange, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

const MAX_LENGTH = 2;

export const expirationYearErrorCases = [
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
		validate: (value: string) => checkYearRange(value),
		errorMessage: ERROR.BEFORE_YEAR,
	},
];
const useExpirationYear = () => {
	const { value, onChange } = usePureNumberState();

	return { expirationYear: value, onChange, cardExpirationYearError: getError(value, expirationYearErrorCases) };
};
export default useExpirationYear;
