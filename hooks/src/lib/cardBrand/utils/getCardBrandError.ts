import { ErrorState, ValidationRule } from "@/types/validation";
import { CardBrand } from "../types";
import { getErrorByRules } from "@/utils/validation";

const cardBrandConditions = {
  checkCardBrand: (cardBrand: CardBrand | null) => Boolean(cardBrand),
};

const cardBrandValidationRules: ValidationRule<CardBrand | null>[] = [
  {
    condition: cardBrandConditions.checkCardBrand,
    errorMessage: "현재 카드 번호에 일치하는 카드사가 존재하지 않습니다.",
  },
];

export const getCardBrandError = (cardBrand: CardBrand | null): ErrorState => {
  return getErrorByRules(cardBrand, cardBrandValidationRules);
};
