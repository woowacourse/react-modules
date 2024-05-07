import { useState } from "react";
import { getInputStatus, useInput } from "./useInput";
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
    // 연/월 status 업데이트
    states.year.setStatus(getInputStatus(states.year.value, LEAST_LENGTH.expiryDateYear));
    states.month.setStatus(getInputStatus(states.month.value, LEAST_LENGTH.expiryDateMonth));

    // 월 입력 중, 연도가 미완성인 경우 : Error 상태로 판단
    if (type === "month" && ["default", "pending"].includes(status)) {
      states.year.setStatus("error");
      setErrorMessage(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    }

    // Default가 아닌 경우 : Error 검사
    if (states[type].status !== "default") {
      const [isValid, errorMessage] = validator.expiryDate.isValidInput(value, type);

      // Error인 경우 : 에러 발생
      if (isValid) {
        states[type].setStatus("error");
        setErrorMessage(errorMessage);
      }
    }

    // Error가 아닌 경우 : 값 업데이트
    states[type].setValue(value);
    setErrorMessage("");
  };

  const handleBlur = () => {
    // 연/월 status 업데이트
    states.month.setStatus(getInputStatus(states.month.value, LEAST_LENGTH.expiryDateMonth));

    // 월 완성인 경우 : Complete 상태로 판단
    if (states.month.status === "pending") {
      states.month.setStatus("complete");
      setErrorMessage("");
    }

    // 연도 미완성인 경우 : Error 상태로 판단
    if (states.year.status === "pending") {
      states.year.setStatus("error");
      setErrorMessage(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    }

    // 모두 완성인 경우 : 유효기간 만료 검사
    if (states.month.status === "complete" && states.year.status === "complete") {
      const [isValid, errorMessage] = validator.expiryDate.isValidDate(
        states.month.value,
        states.year.value
      );

      // Error인 경우 : 에러 발생
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
