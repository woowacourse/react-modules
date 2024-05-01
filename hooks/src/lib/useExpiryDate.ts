import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';

interface Options {
  month?: {
    isAutoFocus?: boolean;
  };
  year?: {
    isAutoFocus?: boolean;
  };
}

const useExpiryDate = (initialValue: { month: string; year: string }, options?: Options) => {
  const month = useExpiryMonth(initialValue.month, { ...options?.month });
  const year = useExpiryYear(initialValue.year, { ...options?.year });

  return { month, year };
};

export default useExpiryDate;
