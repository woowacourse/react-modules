import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidations from "./domains/useValidations";

const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => Number(value) >= 1 && Number(value) <= 12,
    errorMessage: "월의 범위는 1~12여야 합니다.",
    index: [0],
  },
  {
    validate: (value) => value.length === 2,
    errorMessage: "필드의 길이는 2여야합니다.",
    type: "blur",
  },
];
const useExpiryDate = () => {
  const expiryDates: InputState[] = [useInput(""), useInput("")];

  const { inputStates, onChanges, onBlurs } = useValidations(expiryDates, validators);

  return { expiryDates: inputStates, onChanges, onBlurs };
};

export default useExpiryDate;
