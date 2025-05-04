import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";

type singleState = {
  value: string;
  isValid: boolean;
};

interface Props {
  singleState: singleState;
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useSingleInput = (maxLength: number): Props => {
  const [singleState, setSingleState] = useState<singleState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let isValid = true;
    let errorMessage = "";

    if (validator.hasNaN(inputValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.REQUIRE.NUMBER;
    } else if (!validator.hascorrectLength(inputValue, maxLength)) {
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
