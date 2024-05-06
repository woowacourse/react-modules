import { useState, ChangeEvent, useEffect } from "react";
import { COMMON_ERROR, EXPIRATION_DATE } from "./constants/validation";
import {
  isValidNumberValue,
  validateMonthFormat,
  validateYearFormat,
  isExpirationUpToDate,
} from "../validators/cardInputValidator";

interface CardExpirationInfo {
  MM: {
    value: string;
    isValid: boolean;
    errorMessages: string[];
  };
  YY: {
    value: string;
    isValid: boolean;
    errorMessages: string[];
  };
  isAllValid: boolean;
  errorMessages: string[];
}

const useCardExpiration = () => {
  const [cardExpirationInfo, setCardExpirationInfo] =
    useState<CardExpirationInfo>({
      MM: {
        value: "",
        isValid: false,
        errorMessages: [],
      },
      YY: {
        value: "",
        isValid: false,
        errorMessages: [],
      },
      isAllValid: false,
      errorMessages: [],
    });

  useEffect(() => {
    const monthErrorMessages: string[] = [];
    const isValidMonthNumber = isValidNumberValue(cardExpirationInfo.MM.value);
    if (!isValidMonthNumber) {
      monthErrorMessages.push(COMMON_ERROR.notNumeric);
    }

    const isValidMonthFormat = validateMonthFormat(cardExpirationInfo.MM.value);
    if (!isValidMonthFormat) {
      monthErrorMessages.push(EXPIRATION_DATE.errorMessage.invalidMonth);
    }

    const yearErrorMessages: string[] = [];
    const isValidYearNumber = isValidNumberValue(cardExpirationInfo.YY.value);
    if (!isValidYearNumber) {
      yearErrorMessages.push(COMMON_ERROR.notNumeric);
    }

    const isValidYearFormat = validateYearFormat(cardExpirationInfo.YY.value);
    if (!isValidYearFormat) {
      yearErrorMessages.push(EXPIRATION_DATE.errorMessage.invalidYear);
    }

    const isValidExpiration = isExpirationUpToDate(
      cardExpirationInfo.MM.value,
      cardExpirationInfo.YY.value
    );
    const commonErrorMessages = isValidExpiration
      ? []
      : [EXPIRATION_DATE.errorMessage.expired];

    setCardExpirationInfo((prev) => ({
      ...prev,
      MM: {
        ...prev.MM,
        isValid: isValidMonthNumber && isValidMonthFormat,
        errorMessages: monthErrorMessages,
      },
      YY: {
        ...prev.YY,
        isValid: isValidYearNumber && isValidYearFormat,
        errorMessages: yearErrorMessages,
      },
      isAllValid:
        isValidMonthNumber &&
        isValidMonthFormat &&
        isValidYearNumber &&
        isValidYearFormat &&
        isValidExpiration,
      errorMessages: [
        ...monthErrorMessages,
        ...yearErrorMessages,
        ...commonErrorMessages,
      ],
    }));
  }, [cardExpirationInfo.MM.value, cardExpirationInfo.YY.value]);

  const handleCardExpirationChange =
    (type: "MM" | "YY") => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setCardExpirationInfo((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          value: value,
        },
      }));
    };

  return {
    cardExpirationInfo,
    handleCardExpirationMM: handleCardExpirationChange("MM"),
    handleCardExpirationYY: handleCardExpirationChange("YY"),
  };
};

export default useCardExpiration;
