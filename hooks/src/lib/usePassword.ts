import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidation from "./domains/useValidation";

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

const usePassword = () => {
  const ownerName: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(ownerName, validators);

  return { inputState, onChange, onBlur };
};

export default usePassword;
