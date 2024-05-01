import { useState, ChangeEvent } from "react";
import { validatePassword } from "../validators/newCardInputValidator";

const useCardPassword = (cardPasswordLength: number) => {
  const [cardPassWordInfo, setCardPassWordInfo] = useState({
    password: "",
    isError: false,
  });

  const handleCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validatePassword(value, cardPasswordLength);

    setCardPassWordInfo((prev) => {
      return {
        ...prev,
        cardNumbers: value,
      };
    });

    if (isError) {
      setCardPassWordInfo((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }

    setCardPassWordInfo((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return {
    cardPassWordInfo,
    handleCardPassword,
  };
};

export default useCardPassword;
