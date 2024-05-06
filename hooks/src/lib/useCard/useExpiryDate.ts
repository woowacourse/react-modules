import { Options } from '../type';
import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';

interface OptionProps {
  month?: Options;
  year?: Options;
}

const useExpiryDate = (initialValue: { month: string; year: string }, options?: OptionProps) => {
  const month = useExpiryMonth(initialValue.month, { ...options?.month });
  const year = useExpiryYear(initialValue.year, { ...options?.year });

  return { month, year };
};

export default useExpiryDate;
