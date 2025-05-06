export const checkEmptyValue = (value: string) => {
	if (value.trim() === "") {
		return { isValid: false, errorMessage: "카드사를 선택해주세요." };
	}
	return { isValid: true, errorMessage: "" };
};

export const checkNumber = (value: string) => {
	if (!/^\d+$/.test(value)) {
		return { isValid: false, errorMessage: "숫자만 입력 가능합니다." };
	}
	return { isValid: true, errorMessage: "" };
};

export const checkLength = (value: string, validLength: number) => {
	if (value.length < validLength) {
		return {
			isValid: false,
			errorMessage: `${validLength}자리를 입력해주세요.`,
		};
	}
	return { isValid: true, errorMessage: "" };
};

export const checkMonthRange = (value: string) => {
	if (Number(value) < 1 || Number(value) > 12) {
		return {
			isValid: false,
			errorMessage: "1~12까지의 범위만 입력 가능합니다.",
		};
	}
	return { isValid: true, errorMessage: "" };
};

export const checkYearRange = (value: string) => {
	const currentYear = new Date().getFullYear() % 1000;

	if (Number(value) < currentYear) {
		return {
			isValid: false,
			errorMessage: "현재보다 이전년도는 입력할 수 없습니다.",
		};
	}
	return { isValid: true, errorMessage: "" };
};
