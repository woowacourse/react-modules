import { checkEmptyValue, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";
import { ERROR } from "../constants/message";

export const cardCompanyErrorCases = [
	{
		validate: (value: string) => checkEmptyValue(value),
		errorMessage: ERROR.EMPTY_VALUE,
	},
];

const useCardCompany = () => {
	const { value, onChange } = usePureNumberState();

	return { cardCompany: value, onChange, cardCompanyError: getError(value, cardCompanyErrorCases) };
};

export default useCardCompany;
