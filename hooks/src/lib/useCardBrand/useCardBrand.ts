import { useMemo } from "react";
import { detectCardBrand, formatCardNumber } from "../utils/cardBrand";
import { getError } from "../utils/vaildate";
import { ERROR } from "../constants/message";

export type CardBrand = "AMEX" | "Diners" | "Visa" | "Mastercard" | "UnionPay" | null;

interface CardBrandResult {
	cardBrand: CardBrand;
	formattedCardNumber: string;
	cardBrandError: {
		isValid: boolean;
		errorMessage: string | null;
	};
}

const useCardBrand = (cardNumber: string): CardBrandResult => {
	const cardBrand = useMemo<CardBrand>(() => {
		return detectCardBrand(cardNumber) ?? null;
	}, [cardNumber]);
	const errorCases = useMemo(
		() => [
			{
				validate: () => cardBrand === null,
				errorMessage: ERROR.NO_CARD_BRAND,
			},
		],
		[cardBrand]
	);
	const formattedCardNumber = useMemo(() => {
		return formatCardNumber(cardNumber, cardBrand);
	}, [cardNumber, cardBrand]);

	return {
		cardBrand,
		formattedCardNumber,
		cardBrandError: getError(cardBrand ?? null, errorCases),
	};
};

export default useCardBrand;
