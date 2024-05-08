import { useState } from "react";
import {
  validAMEXNumbers,
  validDinersNumbers,
  validMasterNumbers,
  validUnionPayFirstNumbers,
  validUnionPaySecondNumbers,
  validVisaNumbers,
} from "./cardNumberValidator";

type NumberState = readonly [string, (value: string) => void];

type CardBrand = "Visa" | "Master" | "AMEX" | "Diners" | "UnionPay";

const CardInputMaxLength = {
  Master: [4, 4, 4, 4],
  Visa: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  Diners: [4, 6, 4],
  UnionPay: [4, 4, 4, 4],
} as const;

interface CardNumberReturn {
  numbers: {
    firstState: NumberState;
    secondState: NumberState;
    thirdState: NumberState;
    fourthState: NumberState;
  };
  errorList: (string | undefined)[];
  cardBrand?: CardBrand;
  inputMaxLengthList?: (typeof CardInputMaxLength)[keyof typeof CardInputMaxLength];
}

enum CardNumberErrorType {
  CardNumberError = "CardNumberError",
  NoValidBrandError = "noBrandError",
}

const findCardBrand = (value: string): CardBrand | undefined => {
  if (validMasterNumbers(value)) {
    return "Master";
  }
  if (validVisaNumbers(value)) {
    return "Visa";
  }
  if (validAMEXNumbers(value)) {
    return "AMEX";
  }
  if (validDinersNumbers(value)) {
    return "Diners";
  }
  if (validUnionPayFirstNumbers(value)) {
    return "UnionPay";
  }
};

const useCardNumbers = (): CardNumberReturn => {
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [errorTypeList, setErrorTypeList] = useState<(string | undefined)[]>(Array(4).fill(undefined));

  const setWrapper = (value: string, setState: (value: string) => void, index: number) => {
    const number = Number(value);
    if (Number.isNaN(number)) {
      setErrorTypeList((prev) => {
        const arr = [...prev];
        arr[index] = CardNumberErrorType.CardNumberError;
        return arr;
      });
      return;
    }
    setState(value);
  };

  const setFirstWrapper = (value: string) => {
    const brand = findCardBrand(value);
    if (brand) {
      setErrorTypeList((prev) => {
        return [undefined, ...prev.slice(1)];
      });
    } else {
      setErrorTypeList((prev) => {
        return [CardNumberErrorType.NoValidBrandError, ...prev.slice(1)];
      });
    }
    setCardBrand(brand);
    setWrapper(value, setFirst, 0);
  };

  const setSecondWrapper = (value: string) => {
    if (validUnionPaySecondNumbers(first, value)) {
      setCardBrand("UnionPay");
    } else {
      setCardBrand(undefined);
    }
    setWrapper(value, setSecond, 1);
  };

  return {
    numbers: {
      firstState: [first, setFirstWrapper] as const,
      secondState: [second, setSecondWrapper] as const,
      thirdState: [third, (value: string) => setWrapper(value, setThird, 2)] as const,
      fourthState: [fourth, (value: string) => setWrapper(value, setFourth, 3)] as const,
    },
    errorList: errorTypeList,
    cardBrand,
    inputMaxLengthList: cardBrand && CardInputMaxLength[cardBrand],
  };
};

export default useCardNumbers;
