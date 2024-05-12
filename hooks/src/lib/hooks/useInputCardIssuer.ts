import { Status } from '../shared/types';
import { useInput } from './useInput';

type UseInputCardIssuerReturn = [value: string, status: Status, handleChange: (value: string) => void];

const useInputCardIssuer = (): UseInputCardIssuerReturn => {
  const { value, status, setValue, setStatus } = useInput('');

  const handleChange = (value: string) => {
    setStatus('complete');
    setValue(value);
  };

  return [value, status, handleChange];
};

export default useInputCardIssuer;
