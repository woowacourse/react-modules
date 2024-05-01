import { useState, ChangeEvent } from "react";
import { validateUserName } from "../validators/newCardInputValidator";

const useCardUserName = (cardUserNameLength: number) => {
  const [cardUserNameInfo, setCardUserNameInfo] = useState({
    cardUserName: "",
    isError: false,
  });

  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateUserName(value, cardUserNameLength);

    setCardUserNameInfo((prev) => {
      return {
        ...prev,
        cardNumbers: value,
      };
    });

    if (isError) {
      setCardUserNameInfo((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }

    setCardUserNameInfo((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return {
    cardUserNameInfo,
    handleCardUserName,
  };
};

export default useCardUserName;
