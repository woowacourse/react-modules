import { useState } from "react";
import { getStatus, useInput } from "./useInput";
import { LEAST_LENGTH } from "../shared/options";
import { ERROR_MESSAGE } from "../shared/errorMessages";
import validator from "../shared/utils/validator/validator";
import { ExpiryDateType } from "../shared/types";

const useInputExpiryDate = () => {
  const states = {
    month: useInput(""),
    year: useInput(""),
  };
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (value: string, type: ExpiryDateType) => {
    // status 업데이트
    states.month.setStatus(getStatus(states.month.value, LEAST_LENGTH.expiryDateMonth));
    states.year.setStatus(getStatus(states.year.value, LEAST_LENGTH.expiryDateYear));

    // 연도 미완성 error 상태 업데이트
    if (type === "month" && states.year.status === "pending") {
      states.year.setStatus("error");
      setErrorMessage(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    }

    // Default 상태에서 유효성검사 스킵
    if (states[type].status === "default") return;

    // 입력 error 상태 업데이트
    const [isValid, errorMessage] = validator.expiryDate.isValidInput(value, type);
    if (isValid) {
      states[type].setValue(value);
      setErrorMessage("");
    } else {
      states[type].setStatus("error");
      setErrorMessage(errorMessage);
    }
  };

  const handleBlur = () => {
    states.month.setStatus(getStatus(states.month.value, LEAST_LENGTH.expiryDateMonth));
    states.year.setStatus(getStatus(states.year.value, LEAST_LENGTH.expiryDateYear));

    // 월 complete 상태 업데이트
    if (states.month.status === "pending") {
      states.month.setStatus("complete");
      setErrorMessage("");
    }

    // 연도 미완성 error 상태 업데이트
    if (states.year.status === "pending") {
      states.year.setStatus("error");
      setErrorMessage(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    }

    // 유효기간 error 상태 업데이트
    if (states.month.status === "complete" && states.year.status === "complete") {
      const [isValid, errorMessage] = validator.expiryDate.isValidDate(
        states.month.value,
        states.year.value
      );
      if (!isValid) {
        states.month.setStatus("error");
        states.year.setStatus("error");
        setErrorMessage(errorMessage);
      }
    }
  };

  return [
    { month: states.month.value, year: states.year.value },
    { month: states.month.status, year: states.year.status },
    errorMessage,
    handleChange,
    handleBlur,
  ];
};

export default useInputExpiryDate;
