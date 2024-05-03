import { useState } from "react";
import { Validation } from "./validate";

type CardNumberName =
  | "cardNumber1"
  | "cardNumber2"
  | "cardNumber3"
  | "cardNumber4";

const useCardNumberValidation = () => {
  const [cardNumberValidation, setCardNumberValidation] = useState({
    errorMessage: {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    },
    isError: {
      cardNumber1: false,
      cardNumber2: false,
      cardNumber3: false,
      cardNumber4: false,
    },
  });

  const cardNumberValidateHandler = (value: string, name: CardNumberName) => {
    try {
      Validation["cardNumber"](value);
      setCardNumberValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, [name]: "" },
        isError: { ...prev.isError, [name]: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardNumberValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, [name]: error.message },
          isError: { ...prev.isError, [name]: true },
        }));
      }
    }
  };

  return { cardNumberValidation, cardNumberValidateHandler };
};
export default useCardNumberValidation;
