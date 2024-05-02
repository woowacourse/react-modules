import { useState } from "react";
import useValidation from "../useValidation";

const PASSWORD_PREFIX_LENGTH = 2;
const passwordPrefixValidators = [
  (value: string) => {
    if (value.length !== PASSWORD_PREFIX_LENGTH) {
      return `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리여야 합니다.`;
    }
  },
  (value: string) => {
    if (!/^\d+$/.test(value)) {
      return "비밀번호는 숫자만 포함해야 합니다.";
    }
  },
];

export default function usePasswordPrefix() {
  const [value, setValue] = useState("");
  const { errorStatus, validate } = useValidation(passwordPrefixValidators);

  const setPasswordPrefix = (string: string) => {
    setValue(string);
    validate(string);
  };

  return { passwordPrefix: value, setPasswordPrefix, errorStatus };
}
