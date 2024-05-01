import { useState, ChangeEvent } from "react";
import { validateCVC } from "../validators/newCardInputValidator";

const useCardCVC = (cardCVCLength: number) => {
  const [cardCVCInfo, setCardCVCInfo] = useState({
    cardUserName: "",
    isError: false,
  });

  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCVC(value, cardCVCLength);

    setCardCVCInfo((prev) => {
      return {
        ...prev,
        cardNumbers: value,
      };
    });

    if (isError) {
      setCardCVCInfo((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }

    setCardCVCInfo((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return {
    cardCVCInfo,
    handleCardCVC,
  };
};

export default useCardCVC;
