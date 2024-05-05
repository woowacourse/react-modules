import { useState, ChangeEvent } from "react";
import { validateCVC } from "../validators/cardInputValidator";

const useCardCVC = (cardCVCLength: number) => {
  const [cardCVCInfo, setCardCVCInfo] = useState({
    cardCVC: "",
    isValid: false,
  });

  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = validateCVC(value, cardCVCLength);

    setCardCVCInfo((prev) => {
      return {
        ...prev,
        cardCVC: value,
        isValid,
      };
    });
  };

  return {
    cardCVCInfo,
    handleCardCVC,
  };
};

export default useCardCVC;
