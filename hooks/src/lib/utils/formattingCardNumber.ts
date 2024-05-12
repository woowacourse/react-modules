import { REGEX } from "../constants";

const formattingCardNumber = (cardBrand: CardBrandType, value: string): string => {
  if (cardBrand === "Diners") {
    return value.replace(REGEX.cardNumberLength14, "$1 $2 $3");
  } else if (cardBrand === "AMEX") {
    return value.replace(REGEX.cardNumberLength15, "$1 $2 $3");
  } else {
    return value.replace(REGEX.cardNumberLength16, "$1 $2 $3 $4");
  }
};

export default formattingCardNumber;
