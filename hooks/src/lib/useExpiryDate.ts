import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';

interface ExpiryDateOptions {
  month?: {
    isAutoFocus?: boolean;
  };
  year?: {
    isAutoFocus?: boolean;
  };
}

const useExpiryDate = (
  initialValue: { month: string; year: string },
  options?: ExpiryDateOptions,
) => {
  const month = useExpiryMonth(initialValue.month, { ...options?.month });
  const year = useExpiryYear(initialValue.year, { ...options?.year });

  return { month, year };
};

export default useExpiryDate;
