export const CARD_NUMBER_PATTERN = {
	VISA: /^4\d{12}(\d{3})?$/,
	MASTERCARD: /^5[1-5]\d{14}$/,
	AMEX: /^3[47]\d{13}$/,
	DINERS: /^3(?:0[0-5]|[68]\d)\d{11}$/,
	UNIONPAY: /^62\d{14,17}$/,
};

export const CARD_NUMBER_FORMAT = {
	VISA: /(\d{4})(?=\d)/g,
	MASTERCARD: /(\d{4})(?=\d)/g,
	AMEX: /^(\d{4})(\d{6})(\d{5}).*/,
	DINERS: /^(\d{4})(\d{6})(\d{4}).*/,
	UNIONPAY: /(\d{4})(?=\d)/g,
};
