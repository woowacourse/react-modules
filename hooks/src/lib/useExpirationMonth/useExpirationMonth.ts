import { checkEmptyValue, checkLength, checkMonthRange, checkNumber, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";

const MAX_LENGTH = 2;
export const expirationMonthErrorCases = [
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

const useExpirationMonth = () => {
	const { value, onChange } = usePureNumberState();

	return { expirationMonth: value, onChange, cardExpirationMonthError: getError(value, expirationMonthErrorCases) };
};
export default useExpirationMonth;
