import { ChangeEvent, useState } from "react";
import { validLength, validateNumber } from "@/validate/validate";
import { VALID_LENGTH } from "@/constants/system.ts";
import { CardBrandName, cardBrandsInfo } from "@/data/cardCompanyNumbersInfo";
import { CardNumbersErrorMessages } from "@/constants/error";
import { ErrorStatus } from "@/types/errorStatus";
import {
  decideCardBrandByFirstDigits,
  decideCardBrandByNextTwoDigits,
  decideCardBrandByNextFourDigits,
} from "@/utils/checkCardBrand";

export const cardNumbersValidates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.CARD_NUMBERS),
];

const useCardNumbers2 = () => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState<CardBrandName | null>(null);

  const decideCardBrand = (value: string): CardBrandName | null => {
    let newCardBrand = null;

    if (value.length >= 1) {
      newCardBrand = decideCardBrandByFirstDigits(value);
    }
    if (!newCardBrand && value.length >= 2) {
      newCardBrand = decideCardBrandByNextTwoDigits(value);
    }
    if (!newCardBrand && value.length >= 6) {
      newCardBrand = decideCardBrandByNextFourDigits(value);
    }
    return newCardBrand;
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    if (!validateNumber(value).isValid) {
      setErrorMessage(ErrorStatus.IS_NOT_NUMBER);
    }

    const newCardBrand = decideCardBrand(value);
    setCardBrand(newCardBrand);

    const lengthErrorMessage =
      CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH];

    if (cardBrand) {
      const currentCardBrandInfo = cardBrandsInfo.find(
        (brand) => brand.name === cardBrand
      )!;

      if (value.length !== currentCardBrandInfo.validLength) {
        if (!errorMessage) {
          setErrorMessage(lengthErrorMessage);
        }
      } else {
        if (errorMessage === lengthErrorMessage) {
          setErrorMessage(null);
        }
      }
    }
  };

  return {
    value,
    cardBrand,
    onChange: onChangeValue,
    errorMessage,
  };
};

export default useCardNumbers2;
