import useInput, { InputState } from "./domains/useInput";
import validation, { Validator } from "./domains/validation";
import { makeOnBlur, makeOnChange } from "./domains/makeCallback";

const CARD_COMPANIES = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];

const validators: Validator[] = [
  {
    validate: (value) => CARD_COMPANIES.includes(value),
    errorMessage: "유효하지 않은 카드사입니다.",
  },
];
const usePassword = () => {
  const ownerName: InputState = useInput("");

  validation(ownerName, validators);

  const onChange = makeOnChange(ownerName);
  const onBlur = makeOnBlur(ownerName);

  return { ownerName, onChange, onBlur };
};

export default usePassword;
