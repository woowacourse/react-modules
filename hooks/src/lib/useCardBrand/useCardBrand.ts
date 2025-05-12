import { useEffect, useMemo, useState } from "react";
import { detectCardBrand, formatCardNumber } from "../utils/cardBrand";
import { getError } from "../utils/vaildate";

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
	const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);
	const errorCases = [
		{
			validate: () => cardBrand === null,
			errorMessage: "카드 번호에 맞는 카드사가 없습니다.",
		},
	];

	useEffect(() => {
		const detected = detectCardBrand(cardNumber) ?? null;
		setCardBrand(detected);
	}, [cardNumber]);

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
