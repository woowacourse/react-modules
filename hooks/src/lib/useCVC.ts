import useInput, { InputState } from "./domains/useInput";
import useValidation from "./domains/useValidation";
import { Validator } from "./domains/validation";

const COMPLETE_LENGTH = 3;
const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === 3,
    errorMessage: `CVC의 길이는 ${COMPLETE_LENGTH}여야합니다.`,
    type: "blur",
  },
];
const useCVC = () => {
  const CVC: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(CVC, validators);

  return { inputState, onChange, onBlur };
};

export default useCVC;
