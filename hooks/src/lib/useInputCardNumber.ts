import { Dispatch, SetStateAction, useState } from "react";
import { getInputStatus, useInput } from "./useInput";
import { Status } from "../shared/types";
import { LEAST_LENGTH } from "../shared/options";
import { ERROR_MESSAGE } from "../shared/errorMessages";
import validator from "../shared/utils/validator/validator";

const useInputCardNumber = () => {
  const inputFields = [useInput(""), useInput(""), useInput(""), useInput("")];
  const [errorMessage, setErrorMessage] = useState<string>("");

  const values: string[] = [];
  const statuses: Status[] = [];
  const setValues: Dispatch<SetStateAction<string>>[] = [];
  const setStatuses: Dispatch<SetStateAction<Status>>[] = [];

  inputFields.forEach(({ value, status, setValue, setStatus }) => {
    values.push(value);
    statuses.push(status);
    setValues.push(setValue);
    setStatuses.push(setStatus);
  });

  const handleChange = (value: string, index: number) => {
    // 전체필드 status 업데이트
    values.forEach((_value, _index) => {
      setStatuses[_index](getInputStatus(_value, LEAST_LENGTH.cardNumber));

      // 전체필드 미완성 error 상태 업데이트
      if (statuses[_index] === "pending" && _index !== index) {
        setStatuses[_index]("error");
        setErrorMessage(ERROR_MESSAGE.cardNumber.isNotFulfilled);
      }
    });

    // Default 상태에서 유효성검사 스킵
    if (statuses[index] === "default") return;

    // 현제필드 입력 error 상태 업데이트
    const [isValid, errorMessage] = validator.cardNumber.isValidInput(value);
    if (isValid) {
      setValues[index](value);
      setErrorMessage("");
    } else {
      setStatuses[index]("error");
      setErrorMessage(errorMessage);
    }
  };

  const handleBlur = (index: number) => {
    // 전체필드 미완성 error 상태 업데이트
    values.forEach((_value, _index) => {
      setStatuses[_index](getInputStatus(_value, LEAST_LENGTH.cardNumber));

      if (statuses[_index] === "pending" && _index !== index) {
        setStatuses[_index]("error");
        setErrorMessage(ERROR_MESSAGE.cardNumber.isNotFulfilled);
      }
    });
  };

  return [values, statuses, errorMessage, handleChange, handleBlur];
};

export default useInputCardNumber;
