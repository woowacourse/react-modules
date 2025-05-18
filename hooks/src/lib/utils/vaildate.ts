interface ErrorCase {
	validate: (value: string) => boolean;
	errorMessage: string | ((value: string) => string);
}

export const checkEmptyValue = (value: string) => {
	return value.trim() === "";
};

export const checkNumber = (value: string) => {
	return isNaN(Number(value));
};

export const checkLength = (value: string, validLength: number) => {
	return value.length < validLength;
};

export const checkMonthRange = (value: string) => {
	return Number(value) < 1 || Number(value) > 12;
};

export const checkYearRange = (value: string) => {
	const currentYear = new Date().getFullYear() % 1000;

	return Number(value) < currentYear;
};

export const getError = (value: string | null, errorCases: ErrorCase[]) => {
	const input = value ?? "";

	for (const errorCase of errorCases) {
		if (errorCase.validate(input)) {
			return {
				isValid: false,
				errorMessage: typeof errorCase.errorMessage === "function" ? errorCase.errorMessage(input) : errorCase.errorMessage,
			};
		}
	}
	return { isValid: true, errorMessage: "" };
};
