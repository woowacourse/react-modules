import { useEffect, useState } from 'react';
import useInput from './useInput';

const useValid = (useInputs: ReturnType<typeof useInput>[]) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const res = useInputs.every(({ value, error }) => value !== '' && !error.state);

    setIsValid(res);
  }, [...useInputs.map(({ value }) => value), ...useInputs.map(({ error }) => error)]);

  return isValid;
};

export default useValid;
