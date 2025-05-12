import { CARD_NUMBER_FORMAT, CARD_NUMBER_PATTERN } from "../constants/cardBrand";
import { CardBrand } from "../useCardBrand/useCardBrand";

export const detectCardBrand = (cardNumber: string) => {
	const cleanedCardNumber = cardNumber.replace(/\s+/g, "");

	if (CARD_NUMBER_PATTERN.VISA.test(cleanedCardNumber)) return "Visa";
	if (CARD_NUMBER_PATTERN.MASTERCARD.test(cleanedCardNumber)) return "Mastercard";
	if (CARD_NUMBER_PATTERN.AMEX.test(cleanedCardNumber)) return "AMEX";
	if (CARD_NUMBER_PATTERN.DINERS.test(cleanedCardNumber)) return "Diners";
	if (CARD_NUMBER_PATTERN.UNIONPAY.test(cleanedCardNumber)) return "UnionPay";
};

export const formatCardNumber = (cardNumber: string, cardBrand: CardBrand): string => {
	switch (cardBrand) {
		case "AMEX":
			return cardNumber.replace(CARD_NUMBER_FORMAT.AMEX, "$1-$2-$3");
		case "Diners":
			return cardNumber.replace(CARD_NUMBER_FORMAT.DINERS, "$1-$2-$3");
		case "Visa":
			return cardNumber.replace(CARD_NUMBER_FORMAT.VISA, "$1-").replace(/-$/, "");
		case "Mastercard":
			return cardNumber.replace(CARD_NUMBER_FORMAT.MASTERCARD, "$1-").replace(/-$/, "");
		case "UnionPay":
			return cardNumber.replace(CARD_NUMBER_FORMAT.UNIONPAY, "$1-").replace(/-$/, "");
		default:
			return cardNumber;
	}
};
