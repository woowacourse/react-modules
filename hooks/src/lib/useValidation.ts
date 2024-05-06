import { useEffect, useState } from "react";
import useInput from "./useInput";

const useValidation = (inputs: ReturnType<typeof useInput>[]) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const res = inputs.every(({ value, error }) => value !== "" && !error.state);

    setIsValid(res);
  }, [...inputs.map(({ value }) => value), ...inputs.map(({ error }) => error)]);

  return isValid;
};

export default useValidation;
