import { useState } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { CardCompanyErrorMessage } from "@/constants/error";

const checkIncludeArray = (optionArr: string[], value: string) => {
  if (!optionArr.includes(value) || !value) {
    throw new Error(ErrorStatus.INVALID_OPTION);
  }
};

const useCardCompany = ({
  initialValue,
  optionArray,
}: {
  initialValue: string;
  optionArray: string[];
}) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onSetValue = (value: string) => {
    try {
      checkIncludeArray(optionArray, value);
      setValue(value);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(CardCompanyErrorMessage[ErrorStatus.INVALID_OPTION]);
      }
    }
  };

  return { value, onSetValue, errorMessage };
};

export default useCardCompany;
