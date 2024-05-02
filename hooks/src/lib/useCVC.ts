import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";

const COMPLETE_LENGTH = 3;
const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === 3,
    errorMessage: `필드의 길이는 ${COMPLETE_LENGTH}여야합니다.`,
    type: "blur",
  },
];
const useCVC = () => {
  const CVC: InputState = useInput("");

  validation(CVC, validators);

  const onChange = makeOnChange(CVC);
  const onBlur = makeOnBlur(CVC);

  return { CVC, onChange, onBlur };
};

export default useCVC;
