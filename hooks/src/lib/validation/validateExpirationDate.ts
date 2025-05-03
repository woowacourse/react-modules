interface ValidateExpirationDateProps {
  date: { month: string; year: string };
  setIsValid: (isValid: { month: boolean; year: boolean }) => void;
  setErrorMessage: (message: string) => void;
}

export const validateExpirationDate = ({ date, setIsValid, setErrorMessage }: ValidateExpirationDateProps) => {
  const { month, year } = date;

  if (!validateMonth({ month, setIsValid, setErrorMessage })) return;

  if (!validateYear({ year, setIsValid, setErrorMessage })) return;

  setErrorMessage('');
};

const validateMonth = ({ month, setIsValid, setErrorMessage }) => {
  if (!isNumber(month)) {
    setIsValid((prev) => ({ ...prev, month: false }));
    setErrorMessage('숫자만 입력해 주세요.');
    return false;
  }
  if (!isTwoDigits(month)) {
    setIsValid((prev) => ({ ...prev, month: false }));
    setErrorMessage('2자리의 숫자를 입력해 주세요.');
    return false;
  }

  if (!isValidMonth(month)) {
    setIsValid((prev) => ({ ...prev, month: false }));
    setErrorMessage('1~12 사이의 숫자를 입력해 주세요.');
    return false;
  }

  setIsValid((prev) => ({ ...prev, month: true }));
  return true;
};

const validateYear = ({ year, setIsValid, setErrorMessage }) => {
  if (!isNumber(year)) {
    setIsValid((prev) => ({ ...prev, year: false }));
    setErrorMessage('숫자만 입력해 주세요.');
    return false;
  }
  if (!isTwoDigits(year)) {
    setIsValid((prev) => ({ ...prev, year: false }));
    setErrorMessage('2자리의 숫자를 입력해 주세요.');
    return false;
  }

  setIsValid((prev) => ({ ...prev, year: true }));
  return true;
};

const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

const isTwoDigits = (value: string) => {
  return value.length === 2;
};

const isValidMonth = (month: string) => {
  const monthNumber = Number(month);
  return monthNumber >= 1 && monthNumber <= 12;
};
