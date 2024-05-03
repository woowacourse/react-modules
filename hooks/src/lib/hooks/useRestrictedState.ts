import { useState } from "react";

interface UseRestrictedStateProps {
  type?: "english" | "number";
  maxLength?: number;
}

const useRestrictedState = ({ type, maxLength }: UseRestrictedStateProps = {}) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const resetError = () => {
    setIsError(false);
    setErrorMessage(undefined);
  };

  // TODO: reset 추가

  const setError = (errorMessage: string | undefined) => {
    if (!errorMessage) {
      resetError();
      return;
    }
    setIsError(true);
    setErrorMessage(errorMessage);
  };

  const setValueWrapper = (value: string) => {
    if (type === "english" && !/^[a-zA-Z ]+$/.test(value)) {
      setError("영어만 입력하세요");
      return;
    }
    if (type === "number" && Number.isNaN(Number(value))) {
      setError("숫자만 입력하세요");
      return;
    }
    if (maxLength && value.length > maxLength) {
      setError(`${maxLength}자 이상 입력할 수 없습니다.`);
      return;
    }
    setValue(value);
  };

  return {
    valueState: { value, setValue: setValueWrapper },
    errorState: { isError, errorMessage, setError },
  } as const;
};

export default useRestrictedState;
