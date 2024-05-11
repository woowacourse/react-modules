import { StyledModalInput, StyledModalInputContainer, StyledModalInputError } from "./ModalInputField.styled";
import useInputValidate from "./useInputValidate/useInputValidate";

interface ModalInputField {
  placeholder: string;
  value: string;
  updateValue: (value: string) => void;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: (value: string) => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const ModalInputField = ({ placeholder, value, updateValue, validateOnChange, validateOnBlur }: ModalInputField) => {
  const { errorMessage, onChangeHandler, onBlurHandler, onFocusHandler } = useInputValidate({ value, updateValue, validateOnChange, validateOnBlur })

  return (
    <StyledModalInputContainer>
      <StyledModalInput placeholder={placeholder} value={value} onChange={onChangeHandler} onBlur={onBlurHandler} onFocus={onFocusHandler} hasError={errorMessage.length !== 0} />
      <StyledModalInputError children={errorMessage} />
    </StyledModalInputContainer>
  )
}

export default ModalInputField;
