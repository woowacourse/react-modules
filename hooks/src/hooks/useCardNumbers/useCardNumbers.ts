import { ChangeEvent, useState } from "react";
import {
  validAMEXNumbers,
  validDinersNumbers,
  validMasterNumbers,
  validUnionPayFirstNumbers,
  validUnionPaySecondNumbers,
  validVisaNumbers,
} from "./cardNumberValidator";
import useRegister, { RegisterErrorType } from "../useRegister";
import { RestrictedErrorType } from "../useRestrictedState";

type CardBrand = "Visa" | "Master" | "AMEX" | "Diners" | "UnionPay";

const CardInputMaxLength = {
  Master: [4, 4, 4, 4],
  Visa: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  Diners: [4, 6, 4],
  UnionPay: [4, 4, 4, 4],
} as const;

interface InputAttr {
  name: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorType?: RestrictedErrorType | RegisterErrorType | undefined;
}

type InputInfoObj = { attribute: InputAttr; error?: string; isValid?: boolean };

interface CardNumberReturn {
  inputInfo: {
    first: InputInfoObj;
    second: InputInfoObj;
    third: InputInfoObj;
    fourth: InputInfoObj;
  };
  inputCount: number;
  cardBrand?: CardBrand;
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
  const [errorTypeList, setErrorTypeList] = useState<(string | undefined)[]>(Array(4).fill(undefined));
  const inputMaxLengthList = cardBrand && CardInputMaxLength[cardBrand];
  const DEFAULT_INPUT_LENGTH = 4;

  const isNumber = (value: string, index: number) => {
    const number = Number(value);
    if (Number.isNaN(number)) {
      setErrorTypeList((prev) => {
        const arr = [...prev];
        arr[index] = CardNumberErrorType.CardNumberError;
        return arr;
      });
      return false;
    }
    return true;
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
    if (isNumber(value, 0)) return value;
  };

  const { errorType: firstErrType, ...firstNumberAttrs } = useRegister("firstNumber", {
    validator: setFirstWrapper,
    customType: "number",
    required: true,
    maxLength: inputMaxLengthList ? inputMaxLengthList[0] : DEFAULT_INPUT_LENGTH,
  });

  const setSecondWrapper = (value: string) => {
    if (validUnionPaySecondNumbers(firstNumberAttrs.value, value)) {
      setCardBrand("UnionPay");
    } else if (cardBrand === "UnionPay") {
      setCardBrand(undefined);
    }
    if (isNumber(value, 1)) return value;
  };

  const { errorType: secondErrType, ...secondNumberAttrs } = useRegister("secondNumber", {
    validator: setSecondWrapper,
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[1] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: thirdErrType, ...thirdNumberAttrs } = useRegister("thirdNumber", {
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[2] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: fourthErrType, ...fourthNumberAttrs } = useRegister("fourthNumber", {
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[3] : DEFAULT_INPUT_LENGTH,
    disabled: !(inputMaxLengthList && inputMaxLengthList[3]),
  });

  return {
    inputInfo: {
      first: {
        attribute: { ...firstNumberAttrs },
        error: firstErrType || errorTypeList[0],
        isValid: !errorTypeList[0] && inputMaxLengthList && firstNumberAttrs.value.length === inputMaxLengthList[0],
      },
      second: {
        attribute: { ...secondNumberAttrs },
        error: secondErrType || errorTypeList[1],
        isValid: !errorTypeList[1] && inputMaxLengthList && secondNumberAttrs.value.length === inputMaxLengthList[1],
      },
      third: {
        attribute: { ...thirdNumberAttrs },
        error: thirdErrType || errorTypeList[2],
        isValid: !errorTypeList[2] && inputMaxLengthList && thirdNumberAttrs.value.length === inputMaxLengthList[2],
      },
      fourth: {
        attribute: { ...fourthNumberAttrs },
        error: fourthErrType || errorTypeList[3],
        isValid:
          !errorTypeList[3] &&
          inputMaxLengthList &&
          (thirdNumberAttrs.value.length === inputMaxLengthList[3] || !inputMaxLengthList[3]),
      },
    },
    inputCount: inputMaxLengthList ? inputMaxLengthList.length : DEFAULT_INPUT_LENGTH,
    cardBrand,
  };
};

export default useCardNumbers;
