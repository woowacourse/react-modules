import { useState, ChangeEvent } from "react";
import { validateUserName } from "../validators/cardInputValidator";

const useCardUserName = (cardUserNameLength: number) => {
  const [cardUserNameInfo, setCardUserNameInfo] = useState({
    cardUserName: "",
    isValid: false,
  });

  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = validateUserName(value, cardUserNameLength);

    setCardUserNameInfo((prev) => {
      return {
        ...prev,
        cardUserName: value,
      };
    });

    if (isValid) {
      setCardUserNameInfo((prev) => {
        return {
          ...prev,
          isValid: true,
        };
      });
      return;
    }
  };

  return {
    cardUserNameInfo,
    handleCardUserName,
  };
};

export default useCardUserName;
