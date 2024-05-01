import useInput from './useInput';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '비밀번호는 2자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const usePassword = () => {
  const { value, handleChange, handleBlur, errorInfo } = useInput('', {
    onChange,
    onBlur,
  });

  return {
    value,
    handleChange,
    handleBlur,
    errorInfo,
  };
};

export default usePassword;
