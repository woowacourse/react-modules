import useInputs from '../useInputs';

const useCardNumbersState = (initialValue: Record<string, string>) => {
  const { value, setValue } = useInputs(initialValue);

  const updateCardNumbers = (value: string, name: string) => {
    setValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return { value, updateCardNumbers };
};

export default useCardNumbersState;
