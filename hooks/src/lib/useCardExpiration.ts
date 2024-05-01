import { useState, ChangeEvent } from "react";
import { validateCardExpiration } from "../validators/newCardInputValidator";

const useCardExpiration = () => {
  const [cardExpiration, setCardExpiration] = useState({
    MM: "",
    YY: "",
    isError: false,
  });

  const handleCardExpirationMM = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardExpiration(value, "MM");

    setCardExpiration((prev) => {
      return {
        ...prev,
        MM: value,
      };
    });

    if (isError) {
      setCardExpiration((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }
  };

  const handleCardExpirationYY = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardExpiration(value, "YY");

    setCardExpiration((prev) => {
      return {
        ...prev,
        YY: value,
      };
    });

    if (isError) {
      setCardExpiration((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }

    setCardExpiration((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return {
    cardExpiration,
    handleCardExpirationMM,
    handleCardExpirationYY,
  };
};

export default useCardExpiration;
