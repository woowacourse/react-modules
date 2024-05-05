import { useEffect } from "react";

import useExpiryMonth from "./useExpiryMonth";
import useExpiryYear from "./useExpiryYear";
import useExpiryDateValidation from "./useExpiryDateValidation";
import useExpiryDateErrorText from "./useExpiryDateErrorText";

import { INPUT_RULES } from "../constants/cardCustomHook";

const useExpiryDate = () => {
  const {
    expiryMonth,
    errorState: monthError,
    setErrorState: monthSetError,
    errorText: monthErrorText,
    handleExpiryMonthChange,
  } = useExpiryMonth();
  const {
    expiryYear,
    errorState: yearError,
    setErrorState: yearSetError,
    errorText: yearErrorText,
    handleExpiryYearChange,
  } = useExpiryYear();

  const { errorText: expiredDateErrorText, validateExpiryDate } =
    useExpiryDateValidation(monthSetError, yearSetError);

  const expiryDate = [expiryMonth, expiryYear];
  const isExpiryDateFilled = expiryDate.every(
    (expiryDateValue) =>
      expiryDateValue.length === INPUT_RULES.maxExpiryDateLength
  );

  useEffect(() => {
    if (isExpiryDateFilled) validateExpiryDate(expiryMonth, expiryYear);
  }, [expiryMonth, expiryYear]);

  const { errorText } = useExpiryDateErrorText({
    monthErrorText,
    yearErrorText,
    expiredDateErrorText,
  });

  const isExpiryDateCompleted = !errorText && isExpiryDateFilled;

  return {
    expiryDate: {
      month: expiryMonth,
      year: expiryYear,
    },
    errorState: {
      month: monthError,
      year: yearError,
    },
    handleExpiryDateChange: {
      month: handleExpiryMonthChange,
      year: handleExpiryYearChange,
    },
    errorText,
    isExpiryDateCompleted,
  };
};

export default useExpiryDate;
