import { VALID_LENGTH } from "@/constants/system.ts";
import { CardNumberErrorType, CardNumberKeys } from "@/types/cardNumbers";
import {
  CardNumbersErrorMessages,
  SystemErrorMessage,
} from "@/constants/error";
import { validateNumber, validateOverLength } from "@/validate/validate";
import useInputs from "./common/useInputs";

export const cardNumbersValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, VALID_LENGTH.CARD_NUMBERS);
};

type CardCompanyNumbers<T> = {
  name: T;
  cardNumbersFormat: number[];
}[];

const useMultiCardNumbers = <T>({
  cardCompanyNumbersInfo,
  selectedCompany,
}: {
  cardCompanyNumbersInfo: CardCompanyNumbers<T>;
  selectedCompany: T;
}) => {
  const targetCompany = cardCompanyNumbersInfo.find(
    (company) => company.name === selectedCompany
  );

  if (!targetCompany) throw new Error(SystemErrorMessage.INVALID_OPTION);

  const cardInputsNumbers = targetCompany!.cardNumbersFormat.length;
  const inputs = Array.from({ length: cardInputsNumbers }, () => "");

  const { values, onChange, onBlurValidLength } =
    useInputs<CardNumberErrorType>(
      inputs,
      cardNumbersValidates,
      targetCompany!.cardNumbersFormat
    );

  const numberValues = values.reduce((acc, input, index) => {
    acc[`cardNumber${index + 1}` as CardNumberKeys] = input.value;
    return acc;
  }, {} as Record<CardNumberKeys, string>);

  const errorMessages = values.reduce((acc, input, index) => {
    const errorKey = input.error;
    acc[`cardNumber${index + 1}` as CardNumberKeys] = errorKey
      ? CardNumbersErrorMessages[errorKey]
      : null;
    return acc;
  }, {} as Record<CardNumberKeys, string | null>);

  for (const key in errorMessages) {
    if (errorMessages[key as CardNumberKeys] === null) {
      delete errorMessages[key as CardNumberKeys];
    }
  }

  return {
    values: numberValues,
    onChange,
    onBlurValidLength,
    errorMessages,
  };
};

export default useMultiCardNumbers;
