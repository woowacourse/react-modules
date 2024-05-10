import useInput, { ValidationType } from "../useInput/useInput";
import getCardType from "../utils/getCardType";

export const CARD_NUMBER_LENGTH = 4;

type InitialValueType = [string, string, string, string];

const isValidLength = (value: string) => {
  return value.length === CARD_NUMBER_LENGTH;
};

const isNumber = (value: string) => {
  return /^\d*$/.test(value);
};

const useCardNumbers = (initialValue: InitialValueType = ["", "", "", ""]) => {
  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${CARD_NUMBER_LENGTH}자리의 카드 번호를 입력해주세요.`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: "숫자만 입력 가능합니다.",
    },
  ];

  const cardNumber1 = useInput({
    initialValue: initialValue[0],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber2 = useInput({
    initialValue: initialValue[1],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber3 = useInput({
    initialValue: initialValue[2],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber4 = useInput({
    initialValue: initialValue[3],
    inputValidations,
    preventInputValidations,
  });

  const cardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];

  const cardBrand = getCardType(cardNumbers.map(({ value }) => value));
  const isCardNumbersValid = cardNumbers.every(({ value, error }) => value !== "" && !error.state);

  return { cardNumbers, cardBrand, isCardNumbersValid };
};

export default useCardNumbers;
