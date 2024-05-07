import { useState } from "react";

const checkIncludeArray = (optionArr: string[], value: string) => {
  return optionArr.includes(value) && value;
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
    if (checkIncludeArray(optionArray, value)) {
      setValue(value);
    } else {
      setErrorMessage(errorMessage);
    }
  };

  return { value, onSetValue, errorMessage };
};

export default useCardCompany;
