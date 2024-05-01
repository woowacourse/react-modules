import useInput from './useInput';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 3 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: 'cvc는 3자리 또는 4자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const useCVC = () => {
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

export default useCVC;
