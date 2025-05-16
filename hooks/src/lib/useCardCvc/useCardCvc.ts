import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";
import { SingleCardNumberError } from "../types/cardErrorType";

const CVC_VALID_LENGTH = 3;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${CVC_VALID_LENGTH}자리를 입력해주세요.`,
};

const useCardCvc = () => {
  const [cardCVC, setCardCVC] = useState("");
  const [validationResult, setValidationResult] =
    useState<SingleCardNumberError>({
      errorState: false,
      message: "",
    });

  const validate = (cardCVC: string) => {
    if (!checkNumber(cardCVC)) {
      setValidationResult({
        errorState: true,
        message: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!checkValidLength(cardCVC, CVC_VALID_LENGTH)) {
      setValidationResult({
        errorState: true,
        message: ERROR_MESSAGE.INPUT_LENGTH_LIMIT,
      });
      return;
    }

    setValidationResult({ errorState: false, message: "" });
  };

  const handleChange = (cardCVC: string) => {
    setCardCVC(cardCVC);
    validate(cardCVC);
  };

  return { cardCVC, handleChange, validationResult };
};

export default useCardCvc;
