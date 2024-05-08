import { useMemo, useState } from "react";
import { REGEX } from "../constants";
import { CARD_BRAND_MAX_LENGTH, OPTION } from "../constants/option";

const useCardBrand = (cardNumber: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrandType>(null);

  const maxLength = useMemo(() => {
    if (REGEX.amex.test(cardNumber)) {
      setCardBrand("AMEX");
      return CARD_BRAND_MAX_LENGTH.AMEX;
    } else if (REGEX.diners.test(cardNumber)) {
      setCardBrand("Diners");
      return CARD_BRAND_MAX_LENGTH.Diners;
    } else if (REGEX.visa.test(cardNumber)) {
      setCardBrand("Visa");
      return CARD_BRAND_MAX_LENGTH.Visa;
    } else if (REGEX.masterCard.test(cardNumber)) {
      setCardBrand("MasterCard");
      return CARD_BRAND_MAX_LENGTH.MasterCard;
    } else if (REGEX.unionPay.test(cardNumber)) {
      setCardBrand("UnionPay");
      return CARD_BRAND_MAX_LENGTH.UnionPay;
    } else {
      setCardBrand(null);
      return OPTION.cardNumberMaxLength;
    }
  }, [cardNumber]);

  return { cardBrand, maxLength };
};

export default useCardBrand;
