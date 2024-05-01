import { REGEX } from '../constants';

const formattingMonth = (value: string, name: string) => {
	if (name === 'month' && REGEX.oneToNine.test(value)) return `0${value}`;

	return value;
};

export default formattingMonth;
