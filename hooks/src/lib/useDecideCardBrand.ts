import { CardBrandName } from "@/data/cardCompanyNumbersInfo";
import {
  decideCardBrandByFirstDigits,
  decideCardBrandByNextFourDigits,
  decideCardBrandByNextTwoDigits,
} from "@/utils/checkCardBrand";
import { useState } from "react";

const useDecideCardBrand = (value: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrandName | null>();
  let newCardBrand = null;

  if (value.length == 1) {
    newCardBrand = decideCardBrandByFirstDigits(value);
  }
  if (!newCardBrand && value.length == 2) {
    newCardBrand = decideCardBrandByNextTwoDigits(value);
  }
  if (!newCardBrand && value.length == 6) {
    newCardBrand = decideCardBrandByNextFourDigits(value);
  }

  setCardBrand(newCardBrand);
  return { cardBrand };
};

export default useDecideCardBrand;
