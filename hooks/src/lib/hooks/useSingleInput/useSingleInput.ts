import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";

type SingleState = {
  value: string;
  isValid: boolean;
};

interface Props {
  singleState: SingleState;
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useSingleInput = (maxLength: number): Props => {
  const [singleState, setSingleState] = useState<SingleState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorMessage = "";

    if (validator.hasNonNumericValue(inputValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (validator.hasIncorrectLength(inputValue, maxLength)) {
      isValid = false;
      errorMessage = `숫자 ${maxLength}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`;
    }

    const updatedState = { value: inputValue, isValid };

    setSingleState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    singleState,
    errorMessage,
    handleInputChange,
  };
};

export default useSingleInput;
