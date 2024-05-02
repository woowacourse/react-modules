import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";

const MAX_LENGTH = 30;
const validators: Validator[] = [
  {
    validate: (value) => /^[\w\s]*$/.test(value),
    errorMessage: "문자와 공백만 입력 가능합니다.",
  },
  {
    validate: (value) => /^(?!.*\s\s)/.test(value),
    errorMessage: "공백은 한 번만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length <= 30,
    errorMessage: `이름의 길이는 ${MAX_LENGTH}이하여야합니다.`,
  },
];
const useOwnerName = () => {
  const ownerName: InputState = useInput("");

  validation(ownerName, validators);

  const onChange = makeOnChange(ownerName);
  const onBlur = makeOnBlur(ownerName);

  return { ownerName, onChange, onBlur };
};

export default useOwnerName;
