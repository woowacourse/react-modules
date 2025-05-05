export const checkEmptyValue = (value: string) => {
	if (value.trim() === "") {
		return false;
	}
	return true;
};

export const checkNumber = (value: string) => {
	if (!/^\d+$/.test(value)) {
		return false;
	}
	return true;
};

export const checkLength = (value: string, validLength: number) => {
	if (value.length < validLength) {
		return false;
	}
	return true;
};

export const checkMonthRange = (value: string) => {
	if (Number(value) < 1 || Number(value) > 12) {
		return false;
	}
	return true;
};

export const checkYearRange = (value: string) => {
	const currentYear = new Date().getFullYear() % 1000;

	if (Number(value) < currentYear) {
		return false;
	}
	return true;
};
