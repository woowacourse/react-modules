import useInput, { ValidationType } from "./useInput";
import useCardType from "./useCardType";
import useValid from "./useValid";

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

  const cardNumbers = [
    useInput({ initialValue: initialValue[0], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[1], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[2], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[3], inputValidations, preventInputValidations }),
  ];

  const cardBrand = useCardType(cardNumbers.map(({ value }) => value));
  const isCardNumbersValid = useValid(cardNumbers);

  return { cardNumbers, cardBrand, isCardNumbersValid };
};

export default useCardNumbers;
