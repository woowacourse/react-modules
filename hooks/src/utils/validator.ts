import { REGEX } from '../constants';

const ValidatorCondition = {
	checkMaxDigit(value: string, digit: number) {
		return value.length > digit;
	},

	checkIsDigit(value: string) {
		return REGEX.numbers.test(value);
	},

	checkIsEnglish(value: string) {
		return /^[a-zA-Z\s]*$/.test(value);
	},

	checkIsBelowNumber(value: string, limit: number) {
		return parseInt(value) <= limit || !value.length;
	},

	checkIsNotDoubleZero(value: string) {
		return value !== '00';
	},

	checkValidMonth(value: string) {
		return REGEX.month.test(value);
	},
};

const Validator = {
	checkCreditExpirationPeriod(value: string, name: string, maxDigit: number): boolean {
		this.checkNumber(value, maxDigit);

		const isValidMonth = name === 'month' ? ValidatorCondition.checkValidMonth(value) : true;
		if (!isValidMonth) return false;

		return true;
	},

	checkEnglish(value: string): boolean {
		if (ValidatorCondition.checkIsEnglish(value)) return true;

		return false;
	},

	checkNumber(value: string, maxDigit: number) {
		if (ValidatorCondition.checkMaxDigit(value, maxDigit)) return false;

		if (!ValidatorCondition.checkIsDigit(value)) return false;

		return true;
	},
};

export default Validator;
