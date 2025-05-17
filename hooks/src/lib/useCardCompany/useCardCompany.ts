import { checkEmptyValue, getError } from "../utils/vaildate";
import usePureNumberState from "../usePureNumber/usePureNumberState";

export const cardCompanyErrorCases = [
	{
		validate: (value: string) => checkEmptyValue(value),
		errorMessage: "값을 입력해주세요.",
	},
];

const useCardCompany = () => {
	const { value, onChange } = usePureNumberState();

	return { cardCompany: value, onChange, cardCompanyError: getError(value, cardCompanyErrorCases) };
};

export default useCardCompany;
