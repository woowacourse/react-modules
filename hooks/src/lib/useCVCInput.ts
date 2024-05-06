import { useState } from "react";
import useCVCValidation from "./validation/useCVCValidation";

type CardCVCName = "CVC";

const useCVCInput = () => {
  const { CVCValidation, isCVCValid } = useCVCValidation();

  const [CVC, setCVC] = useState({
    value: {
      CVC: "",
    },
    ...CVCValidation,
  });

  const handleCVCChange = (value: string, name: CardCVCName) => {
    if (isCVCValid(value, name)) return;
    setCVC({
      errorMessage: { ...CVC.value, [name]: "" },
      isError: { ...CVC.isError, [name]: false },
      value: { ...CVC.value, [name]: value },
    });
  };

  return { CVC, handleCVCChange };
};

export default useCVCInput;
