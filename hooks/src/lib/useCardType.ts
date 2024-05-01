import useSelect from './useSelect';

const onChange = <T>(value: T) => {
  if (typeof value === 'undefined') {
    return { isValid: false, errorMessage: '카드사를 선택해주세요.' };
  }

  return { isValid: true, errorMessage: '' };
};

const useCardType = <T>(initialValue: T) => {
  const { value, handleChange, errorInfo } = useSelect(initialValue, {
    onChange,
  });

  return { value, handleChange, errorInfo };
};

export default useCardType;
