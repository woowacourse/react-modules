import { useState } from "react";
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from "./validator/validateCardInput";
import { getExpirationFirstErrorMessage } from "./validator/getFirstErrorMessage";

export function useCardExpirationDateInput() {
  const [cardExpirationDate, setCardExpirationDate] = useState({
    month: "",
    year: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const errorResults = {
    month: {},
    year: {},
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const nextExpirationDate = { ...cardExpirationDate, [name]: value };
    setCardExpirationDate(nextExpirationDate);

    errorResults.month = validateExpirationDateMonth(
      nextExpirationDate.month,
      nextExpirationDate.year
    );
    errorResults.year = validateExpirationDateYear(
      nextExpirationDate.month,
      nextExpirationDate.year
    );

    const monthErrorMessage = getExpirationFirstErrorMessage(
      errorResults.month,
      "MONTH"
    );
    const yearErrorMessage = getExpirationFirstErrorMessage(
      errorResults.year,
      "YEAR"
    );

    setErrorMessage(monthErrorMessage || yearErrorMessage || "");
  }

  return {
    cardExpirationDate,
    onChangeHandler,
    errorMessage,
  };
}
