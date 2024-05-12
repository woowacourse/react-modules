import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { expiryMonthValidator, expiryYearValidator, EXPIRY_MONTH_LENGTH } from "./validator";

export interface UseExpiryDateReturn {
  month: {
    value: string;
    errorStatus: IErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  year: {
    value: string;
    errorStatus: IErrorStatus;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
}

export function useExpiryDate(): UseExpiryDateReturn {
  const monthControl = useInputValidation(expiryMonthValidator);
  const yearControl = useInputValidation(expiryYearValidator);

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    monthControl.setValueWithValidation(e.target.value);
  };
  const onMonthBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.padStart(EXPIRY_MONTH_LENGTH, "0");
    monthControl.setValue(formattedValue);
    monthControl.validateOnBlur(formattedValue);
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    yearControl.setValueWithValidation(e.target.value);
  };
  const onYearBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    yearControl.validateOnBlur(e.target.value);
  };

  return {
    month: {
      value: monthControl.value,
      errorStatus: monthControl.errorStatus,
      onChange: onMonthChange,
      onBlur: onMonthBlur,
    },
    year: {
      value: yearControl.value,
      errorStatus: yearControl.errorStatus,
      onChange: onYearChange,
      onBlur: onYearBlur,
    },
  };
}
