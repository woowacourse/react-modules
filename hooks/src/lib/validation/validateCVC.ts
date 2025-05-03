interface ValidateCVCProps {
  input: string;
  setIsValid: (isValid: boolean) => void;
  setErrorMessage: (message: string) => void;
}

export const validateCVC = ({ input, setIsValid, setErrorMessage }: ValidateCVCProps) => {
  if (Number.isNaN(Number(input))) {
    setIsValid(false);
    setErrorMessage('숫자만 입력해 주세요.');
    return false;
  }
  if (input.length !== 3) {
    setIsValid(false);
    setErrorMessage('3자리 숫자를 입력해 주세요.');
    return false;
  }

  return true;
};
