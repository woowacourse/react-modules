import { REGEX } from "../constants";

const formattingCardNumber = (cardBrand: CardBrandType, value: string): string => {
  let formattedCardNumber: string;

  if (cardBrand === "Diners") {
    formattedCardNumber = value.replace(REGEX.cardNumberLength14, "$1 $2 $3");
  } else if (cardBrand === "AMEX") {
    formattedCardNumber = value.replace(REGEX.cardNumberLength15, "$1 $2 $3");
  } else {
    formattedCardNumber = value.replace(REGEX.cardNumberLength16, "$1 $2 $3 $4");
  }

  return formattedCardNumber;
};

export default formattingCardNumber;
