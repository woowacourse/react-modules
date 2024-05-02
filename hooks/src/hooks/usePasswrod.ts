import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";

const VALID_LENGTH = 4;
const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === VALID_LENGTH,
    errorMessage: `비밀번호는 ${VALID_LENGTH}여야합니다.`,
    type: "blur",
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
