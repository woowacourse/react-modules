import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidation from "./domains/useValidation";

const MAX_LENGTH = 30;
const validators: Validator[] = [
  {
    validate: (value) => /^[A-Z\s]*$/.test(value),
    errorMessage: "영어 대문자와 공백만 입력 가능합니다.",
  },
  {
    validate: (value) => /^(?!.*\s\s)/.test(value),
    errorMessage: "공백은 2번 이상 연속될 수 없습니다.",
  },
  {
    validate: (value) => value.length <= 30,
    errorMessage: `이름의 길이는 ${MAX_LENGTH}이하여야합니다.`,
  },
];
const useOwnerName = () => {
  const ownerName: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(ownerName, validators);

  return { inputState, onChange, onBlur };
};

export default useOwnerName;
