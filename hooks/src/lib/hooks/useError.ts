import { useState } from "react";
import { NO_ERROR } from "../constants";
import { CheckValidationType, UseErrorProps } from "../types";

export default function useError<T extends Record<string, string>>({
  initError,
  getValidationFns,
}: UseErrorProps<T>) {
  const [error, setError] = useState<T>(initError);

  function checkValidation({ length, value, type }: CheckValidationType<T>) {
    const validationFns = getValidationFns(length, value);
    const validation = validationFns.find((v) => v.condition());
    setError((prev: T) => {
      const errorMsg = validation ? validation.errorMsg : NO_ERROR;

      if (prev[type] === errorMsg) return prev;

      return {
        ...prev,
        [type]: errorMsg,
      };
    });
  }

  function findFirstError(errorObj: Record<string, string>) {
    for (const key in errorObj) {
      const typedKey = key as keyof typeof errorObj;
      if (errorObj[typedKey] !== NO_ERROR) {
        return { key: typedKey, value: errorObj[typedKey] };
      }
    }
    return null;
  }

  function getErrorMessage() {
    const result = findFirstError(error);
    return result?.value;
  }

  function isError() {
    return !!findFirstError(error);
  }

  function resetError() {
    setError(initError);
  }

  return { error, checkValidation, getErrorMessage, isError, resetError };
}
