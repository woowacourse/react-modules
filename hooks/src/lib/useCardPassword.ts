import { useState, ChangeEvent } from "react";
import { validatePassword } from "../validators/cardInputValidator";

const useCardPassword = (cardPasswordLength: number) => {
  const [cardPassWordInfo, setCardPassWordInfo] = useState({
    password: "",
    isValid: false,
  });

  const handleCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = validatePassword(value, cardPasswordLength);

    setCardPassWordInfo((prev) => {
      return {
        ...prev,
        password: value,
      };
    });

    if (isValid) {
      setCardPassWordInfo((prev) => {
        return {
          ...prev,
          isValid: true,
        };
      });
      return;
    }
  };

  return {
    cardPassWordInfo,
    handleCardPassword,
  };
};

export default useCardPassword;
