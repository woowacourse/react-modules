import { useEffect } from "react";
import useInput, { ValidationType } from "./useInput";

const EXPIRATION_DATE_LENGTH = 2;
const MONTH = {
  start: 1,
  end: 12,
} as const;

type InitialValueType = [string, string];

const isValidLength = (value: string) => {
  return value.length === EXPIRATION_DATE_LENGTH;
};

const isValidMonth = (value: string) => {
  const month = Number(value);

  return month >= MONTH.start && month <= MONTH.end;
};

const isNumber = (value: string) => {
  return /^\d*$/.test(value);
};

const useCardExpirationDate = (initialValue: InitialValueType = ["", ""]) => {
  const monthInputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${EXPIRATION_DATE_LENGTH}자리 월(MM)을 입력해주세요. ex) 01`,
    },
    {
      validate: isValidMonth,
      message: `${MONTH.start}부터 ${MONTH.end}사이의 숫자를 입력해주세요.`,
    },
  ];

  const yearInputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${EXPIRATION_DATE_LENGTH}자리 년도(YY)를 입력해주세요. ex) 24`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: "숫자만 입력 가능합니다.",
    },
  ];

  const month = useInput({
    initialValue: initialValue[0],
    inputValidations: monthInputValidations,
    preventInputValidations,
  });
  const year = useInput({
    initialValue: initialValue[1],
    inputValidations: yearInputValidations,
    preventInputValidations,
  });

  const isCardExpirationDateValid =
    month.value !== "" && year.value !== "" && !month.error.state && !year.error.state;

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear() % 10 ** EXPIRATION_DATE_LENGTH;
    const currentMonth = date.getMonth() + 1;

    if (isValidLength(month.value) && isValidMonth(month.value) && isValidLength(year.value)) {
      const error = { state: true, message: "유효기간이 만료된 카드입니다." };
      const initialErrorState = { state: false, message: "" };

      if (currentYear > Number(year.value)) {
        month.setError(error);
        year.setError(error);
      } else if (currentYear === Number(year.value) && currentMonth > Number(month.value)) {
        month.setError(error);
        year.setError(error);
      } else {
        month.setError(initialErrorState);
        year.setError(initialErrorState);
      }
    }
  }, [month.value, year.value]);

  return { month, year, isCardExpirationDateValid };
};

export default useCardExpirationDate;
