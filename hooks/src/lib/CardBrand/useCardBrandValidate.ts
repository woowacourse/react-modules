import { useState } from "react";

import { validationMessages } from "../../constants/validationMessages";

const useCardBrandValidate = (cardBrands: string[]) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardBrand = (cardBrand: string) => {
    if (!cardBrands.includes(cardBrand)) {
      setIsValid(false);
      setErrorMessage(validationMessages.invalidBrand);
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardBrand };
};

export default useCardBrandValidate;
