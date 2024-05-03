import useInput, { InputState } from "./domains/useInput";
import useValidation from "./domains/useValidation";
import { Validator } from "./domains/validation";

export const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

export const cardCompanyValidator: Validator = {
  validate: (value) => CARD_COMPANIES.includes(value),
  errorMessage: "유효하지 않은 카드사입니다.",
};
const validators: Validator[] = [cardCompanyValidator];

const usePassword = () => {
  const cardCompany: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(cardCompany, validators);

  return { inputState, onChange, onBlur };
};

export default usePassword;
